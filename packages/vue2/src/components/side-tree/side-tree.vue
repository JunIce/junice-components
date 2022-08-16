<template>
  <div class="Tree-content">
    <div
      v-for="(item, idx) in computedTree"
      :key="idx"
      :class="{
        'Tree-Title': true,
        'Tree-SecondLevelTitle': item.$depth > 0,
        'Tree-FirstLevelTitle': item.$depth == 0,
        active: item.id === computedValue,
      }"
    >
      <div class="Tree-Item" @click="onHandleClick(item)">
        <div class="Tree-ItemTxt">{{ item[computedFieldNames.label] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideTree',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: [String, Number],
    fieldNames: {
      type: Object,
    },
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(row) {
        this.$emit('change', row.id);
      },
    },
    computedTree() {
      return this.genTree([...this.options]);
    },
    computedFieldNames() {
      return {
        children: 'children',
        label: 'label',
        key: 'key',
        ...(this.fieldNames || {}),
      };
    },
  },
  methods: {
    onHandleClick(row) {
      this.$emit('change', row.id);
    },
    genTree(tree = []) {
      const data = [];
      if (tree.length > 0) {
        this._doLoopTreeWithDepth(tree, 0, data);
      }
      return data;
    },
    _doLoopTreeWithDepth(list, depth = 0, data = []) {
      list.forEach((el, idx) => {
        el.$depth = depth;
        if (!el.id) {
          el.id = `t-${depth}-${idx}`;
        }
        data.push(el);
        if (el[this.computedFieldNames.children]) {
          this._doLoopTreeWithDepth(el[this.computedFieldNames.children], depth + 1, data);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin dot {
  content: ' ';
  position: absolute;
  background-color: rgb(133, 144, 166);
  display: inline-block;
  border-radius: 50%;
  top: 12px;
  margin-right: 12px;
}
.Tree {
  &-content {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    flex-direction: column;
    font-size: 12px;
    display: flex;
  }

  &-Title {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    flex-shrink: 0;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(133, 144, 166);
    font-size: 12px;
    padding-left: 30px;
    font-weight: 500;
    position: relative;
    height: 30px;
    line-height: 30px;
  }

  &-FirstLevelTitle::before {
    @include dot;
    left: 16px;
    width: 6px;
    height: 6px;
  }
  &-SecondLevelTitle::before {
    @include dot;
    left: 17px;
    width: 4px;
    height: 4px;
  }
  &-FirstLevelTitle,
  &-SecondLevelTitle {
    &::after {
      content: ' ';
      display: block;
      position: absolute;
      left: 19px;
      top: 0px;
      transform: translateX(-50%);
      width: 2px;
      height: 40px;
      margin-top: 12px;
      background: rgba(133, 144, 166, 0.12);
    }
    &.active {
      color: rgb(0, 102, 255);
    }
    &.active::before {
      background-color: rgb(0, 102, 255);
    }
  }
  &-Title:last-child::after {
    height: 0px;
  }
  &-Item {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;

    &:hover {
      color: rgb(0, 102, 255);
      background: rgb(235, 235, 235);
      border-radius: 4px;
    }
  }

  &-ItemTxt {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    pointer-events: none;
    word-break: break-all;
    width: calc(100% - 22px);
  }
}
</style>
