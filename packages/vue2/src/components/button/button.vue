<template>
  <button :class="defaultCls"><slot></slot></button>
</template>

<script>
export default {
  name: 'JButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    defaultCls() {
      return {
        btn: true,
        'btn-block': true,
        'btn-info': this.type === 'info',
        'btn-default': this.type === 'default',
        'btn-primary': this.type === 'primary',
        'btn-success': this.type === 'success',
        'btn-danger': this.type === 'danger',
        'btn-warning': this.type === 'warning',
        disabled: this.disabled,
        outline: this.outline,
        'btn-rounded': this.round,
      };
    },
  },
};
</script>

<style lang="scss" scoped src="@/assets/styles/button.scss"></style>
