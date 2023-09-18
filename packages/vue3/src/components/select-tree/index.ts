import { ElInput, ElPopover, ElTree } from "element-plus"
import { computed, defineComponent, h, onMounted, ref } from "vue"

const SelectTree = defineComponent({
    props: {
        expandAll: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: [String, Array,]
        },
        popoverProps: {
            type: Object,
            default: () => ({})
        },
        treeData: {
            type: Array
        },
        treeProps: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ['update:modelValue'],
    setup(props, context) {
        const { emit, expose } = context
        const inputRef = ref<InstanceType<typeof ElInput> | null>(null)
        const treeRef = ref<InstanceType<typeof ElTree> | null>(null)
        const selectedNode = ref<any>()
        const popoverVisible = ref<boolean>(false)

        const toggleVisible = () => {
            popoverVisible.value = !popoverVisible.value
        }

        expose({
            treeInstance: () => treeRef.value
        })

        return () => {
            return h('div', {}, [
                h(ElPopover, {
                    ...props.popoverProps,
                    placement: 'bottom-start',
                    trigger: 'click',
                    width: inputRef.value?.$el.clientWidth,
                    visible: popoverVisible.value,
                }, {
                    default: () => h(ElTree, {
                        ...props.treeProps,
                        ref: treeRef,
                        data: props.treeData,
                        onNodeClick: (e: any) => {
                            selectedNode.value = e
                            toggleVisible()
                            emit('update:modelValue', e)
                        }
                    }),
                    reference: () => h(ElInput, {
                        ref: inputRef,
                        readonly: true,
                        value: selectedNode.value?.label,
                        onClick: () => {
                            toggleVisible()
                        }
                    })
                })
            ])
        }
    }
})

export { SelectTree }