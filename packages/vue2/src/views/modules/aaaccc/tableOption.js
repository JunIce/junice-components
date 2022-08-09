export const tableOption = {
  border: true,
  index: true,
  indexLabel: "序号",
  stripe: true,
  menuAlign: "center",
  searchMenuSpan: 6,
  align: "center",
  viewBtn: true,
  card: false,
  columnBtn: false,
  menuWidth: 300,
  dialogClickModal: false,
  indexWidth: 90,
  searchLabelWidth: 100,
  labelWidth: 100,
  searchIcon: true,
  refreshBtn: false,
  searchMenuPosition: "right",
  searchBtnText: "查 询",
  labelPosition: "right",
  gutter: 24,
  searchGutter: 24,
  searchIndex: 7,
  searchShowBtn: false,
  searchBtn: false,
  emptyBtn: false,
  menu: true,
    dialogCustomClass: "crud-dialog",
  // selection: true,
  // selectionWidth: 70,
  // selectionFixed: true,
  column: [
    {
      label: "按钮名称",
      prop: "buttonName",
      hide: false,

      rules: [
        { required: true, message: "按钮名称不能为空", trigger: "blur" },
        { min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur" },
      ],
      search: true,
      overHidden: true,
    },
    {
      label: "按钮分组",
      prop: "groupCode",
      hide: false,
      rules: [
        { required: true, message: "按钮分组不能为空", trigger: "change" },
      ],
      search: true,
      type: "select",
      dicData: [],
    },
    {
      label: "按钮分组",
      search: true,
      prop: "buttonDescribe",
      hide: false,
      overHidden: true,
      type: "input",
      rules: [{ max: 128, message: "长度在 128 个字符内", trigger: "blur" }],
    },
    {
      label: "按钮分组",
      search: true,
      prop: "buttonDescribe4",
      hide: false,
      overHidden: true,
      type: "input",
      rules: [{ max: 128, message: "长度在 128 个字符内", trigger: "blur" }],
    },
    {
      label: "按钮分组",
      search: true,
      prop: "buttonDescribe3",
      hide: false,
      overHidden: true,
      type: "input",
      rules: [{ max: 128, message: "长度在 128 个字符内", trigger: "blur" }],
    },
    {
      label: "按钮分组",
      search: true,
      prop: "buttonDescribe2",
      hide: false,
      overHidden: true,
      type: "input",
      rules: [{ max: 128, message: "长度在 128 个字符内", trigger: "blur" }],
    },
    {
      label: "按钮分组",
      search: true,
      prop: "buttonDescribe1",
      hide: false,
      overHidden: true,
      type: "input",
      rules: [{ max: 128, message: "长度在 128 个字符内", trigger: "blur" }],
    },
    {
      label: "创建时间",
      prop: "createTime",
      hide: false,
      type: "datetime",
      format: "yyyy-MM-dd HH:mm",
      valueFormat: "yyyy-MM-dd HH:mm:ss",
      editDisplay: false,
      addDisplay: false,
      width: 200,
    },
  ],
};
