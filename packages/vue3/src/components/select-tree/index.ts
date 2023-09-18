import { ElInput, ElPopover, ElTree } from "element-plus"
import { defineComponent, h, nextTick, onMounted, ref, watch, withDirectives } from "vue"
import { ClickOutside as vClickOutside } from 'element-plus'

const SelectTree = defineComponent({
    props: {
        expandAll: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: Array
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

        watch(() => props.modelValue, () => {
            if ((props.modelValue || [])?.length > 0) {
                nextTick(() => {
                    const nodes = props.modelValue?.map(key => treeRef.value?.getNode(key as string))
                    treeRef.value?.setCheckedNodes(nodes as any[], false)
                })
            }
        }, {
            immediate: true
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
                            popoverVisible.value = false
                            emit('update:modelValue', [e[props.treeProps.nodeKey]])
                        }
                    }),
                    reference: () =>
                        withDirectives(h(ElInput, {
                            ref: inputRef,
                            readonly: true,
                            value: selectedNode.value?.label,
                            onClick: () => {
                                toggleVisible()
                            }
                        }), [
                            [vClickOutside, () => popoverVisible.value = false]
                        ])
                })
            ])
        }
    }
})

export { SelectTree }