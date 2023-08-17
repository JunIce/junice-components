import { defineComponent, computed, VNode, PropType } from "vue";
import {
  ElRow,
  ElCol,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElRadioGroup,
  ElRadio,
  ElCheckboxGroup,
  ElCheckbox,
  ElSwitch,
} from "element-plus";

export interface LabelOption {
  label: string;
  value: string;
}

export interface ColumnOption {
  label: string;
  prop: string;

  type?: keyof typeof COMP_MAP;
  span?: number;
  class?: string;
  visible?: boolean;
  component?: () => VNode<any>;
  props?: { options?: LabelOption[] } & Omit<typeof ElInput, "install"> &
    Omit<typeof ElSelect, "install"> &
    Omit<typeof ElRadioGroup, "install"> &
    Omit<typeof ElCheckboxGroup, "install"> &
    Omit<typeof ElSwitch, "install"> &
    Omit<typeof ElRadio, "install">;
}

export interface FormOption {
  labelWidth?: number | string;
  gutter?: number;
  span?: number | null;
}

const COMP_MAP = {
  input: (column: ColumnOption) => (
    <ElInput {...Object.assign(column.props || {}, { type: column.type })} />
  ),
  password: (column: ColumnOption) => (
    <ElInput {...Object.assign(column.props || {}, { type: "password" })} />
  ),
  textarea: (column: ColumnOption) => (
    <ElInput {...Object.assign(column.props || {}, { type: "textarea" })} />
  ),
  select: (column: ColumnOption) => (
    <ElSelect {...Object.assign(column.props || {})}>
      {column.props?.options?.map((item: LabelOption) => (
        <ElOption key={item.value} label={item.label} value={item.value} />
      ))}
    </ElSelect>
  ),
  checkbox: (column: ColumnOption) => (
    <ElCheckboxGroup {...Object.assign(column.props || {})}>
      {column.props?.options?.map((item: LabelOption) => (
        <ElCheckbox key={item.value} label={item.label} name={item.value} />
      ))}
    </ElCheckboxGroup>
  ),
  radio: (column: ColumnOption) => (
    <ElRadioGroup {...Object.assign(column.props || {})}>
      {column.props?.options?.map((item: LabelOption) => (
        <ElRadio key={item.value} label={item.value}>
          {item.label}
        </ElRadio>
      ))}
    </ElRadioGroup>
  ),
  switch: (column: ColumnOption) => (
    <ElSwitch {...Object.assign(column.props || {})} />
  ),
};

const DEFAULT_FORM_OPTION: FormOption = {
  labelWidth: 110,
  gutter: 20,
  span: 24,
};

export default defineComponent({
  name: "ElCommonFormItem",
  components: {
    ElInput,
    ElSelect,
    ElOption,
    ElFormItem,
  },
  props: {
    formOption: {
      type: Object as PropType<FormOption>,
      default: () => Object.assign({}, DEFAULT_FORM_OPTION),
    },
    columns: {
      type: Array as PropType<ColumnOption[]>,
      required: true,
      default: () => [],
    },
    formData: {
      type: Object as PropType<Record<string, any>>,
      required: true,
      default: () => {},
    },
  },
  emits: ["update:formData"],
  setup(props, ctx) {
    const columns = computed(() =>
      props.columns.filter((c) => c.visible !== false).map(renderColumn)
    );

    const formData = computed({
      get() {
        return props.formData;
      },
      set(value) {
        ctx.emit("update:formData", value);
      },
    });

    const renderColumn = (column: ColumnOption, idx: number) => {
      let Comp = column.component
        ? column.component()
        : column.type
        ? (COMP_MAP[column.type](column) as JSX.Element)
        : null;

      let slot = ctx.slots[column.prop];

      if (column.type && !Comp) {
        throw Error("缺少type对应组件");
      } else if (!column.type && !Comp && !slot) {
        throw Error("缺少自定义组件");
      }

      if (!Comp && !slot) return null;

      return (
        <ElCol span={column.span || props.formOption?.span || 8}>
          <ElFormItem label={column.label} prop={column.prop}>
            {slot?.({ column })}
            {Comp ? (
              // @ts-ignore
              <Comp {...column.props} v-model={formData.value[column.prop]} />
            ) : null}
          </ElFormItem>
        </ElCol>
      );
    };

    return () => {
      return <ElRow gutter={props.formOption?.gutter}>{columns.value}</ElRow>;
    };
  },
});
