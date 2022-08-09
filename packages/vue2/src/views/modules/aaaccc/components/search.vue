<template>
  <el-dialog
    width="1200px"
    :visible="isShowSearch"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :before-close="close"
    lock-scroll
    title="高级检索"
      custom-class="crud-dialog"
  >
    <avue-form ref="form" v-model="form" :option="option" @submit="submit">
    </avue-form>
  </el-dialog>
</template>

<script>
import option from "./option";
export default {
  name: "Search",
  props: {
    isShowSearch: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      option,
      form: {},
    };
  },
  methods: {
    init() {},
    submit(form, done) {
      this.$emit("handleHighSearch", form);
      done();
      this.close();
    },
    close() {
      this.$emit("update:isShowSearch", false);
    },
  },
};
</script>

<style lang="scss" scoped></style>
