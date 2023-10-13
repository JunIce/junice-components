import { ElSelect as BaseSelect, ElInput } from "element-plus"
import { defineComponent, h, ref } from "vue"

const ElSelect = defineComponent({
    extends: BaseSelect,
    props: {
        ...BaseSelect.props,
        showSearch: {
            type: Boolean,
            default: false
        },
    },
    setup: (props: any, ctx: any) => {
        const render = BaseSelect.setup?.(props, ctx)
        return render
    },
    render(...args: any[]) {
        const vnodes = BaseSelect.render?.apply(null, args)
        return vnodes
    }
})

export { ElSelect }