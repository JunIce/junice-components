<template>
  <div class="app-container">
    <avue-crud
      ref="crud"
      v-model="form"
      class="crud-table"
      :option="tableOption"
      :data="list"
      :page.sync="page"
      :search.sync="searchForm"
      :table-loading="loading"
      :header-cell-class-name="() => 'crud-table-head'"
      :cell-class-name="() => 'crud-cell'"
      @on-load="getList()"
      @search-change="searchChange"
      @refresh-change="getList()"
      @row-update="update"
      @row-save="create"
      @row-del="handleDelete"
    >
      <template #menuLeft="{ row, size, type }">
        <el-button type="danger" plain :size="size" icon="el-icon-delete"
          >删除</el-button
        >
      </template>
      <template #menuRight="{ size }">
        <el-dropdown trigger="click" :hide-on-click="false">
          <el-button class="btn-text-grey" type="text" :size="size"
            >数据操作 <i class="el-icon-s-operation el-icon-right"></i
          ></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in handleList" :key="item.prop">
              <el-checkbox
                v-model="item.hide"
                :label="item.prop"
                @change="(e) => handleColumn(item.prop, e)"
                >{{ item.label }}</el-checkbox
              >
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
      <template #searchMenu="{ size }">
        <el-button
          icon="el-icon-finished"
          type="text"
          :size="size"
          @click="openSearch"
          >高级检索</el-button
        >
        <el-button type="primary" :size="size" @click="searchChange"
          >查 询</el-button
        >
        <el-button type="primary" plain :size="size" @click="resetForm"
          >重 置</el-button
        >
      </template>
    </avue-crud>
    <Search
      ref="search"
      :is-show-search.sync="isShowSearch"
      @handleHighSearch="searchChange"
    ></Search>
  </div>
</template>

<script>
import { getPage, restful } from '@/api/aaaccc'
import { tableOption } from "./tableOption";
import Search from "./components/search";
export default {
  name: 'Aaaccc',
  components: {
    Search,
  },
  data() {
    return {
      searchForm: {},
      tableOption: this.$utils.deepCopy(tableOption),
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 10, // 每页显示多少条
      },
      list: [],
      loading: true,
      form: {},
      isShowSearch: false,
    };
  },
  computed: {
    handleList() {
      return this.tableOption.column.concat({
        hide: false,
        prop: "MENU",
        label: this.tableOption.menuTitle || "操作",
      });
    },
  },
  created() {
    this.checkList = this.tableOption.column.map((i) => i.prop);
  },
  methods: {
    resetForm() {
      this.$refs.crud.searchReset();
    },
    openSearch() {
      this.isShowSearch = true;
    },
    handleColumn(prop, e) {
      if (prop == "MENU") {
        this.$set(this.tableOption, "menu", !e);
      }
      this.$refs.crud.refreshTable();
    },
    getList(option) {
      console.log("option", option);
      this.loading = true;
      getPage({
        current: this.page.currentPage,
        size: this.page.pageSize,
        ...this.searchForm,
        ...(option || ""),
      })
        .then((response) => {
          this.list = response.result.records;
          this.page.total = response.result.total;
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    searchChange(form, done) {
      console.log("form", form);
      this.page.currentPage = 1;
      this.getList(form || "");
      done && done();
    },
    handleDelete(row, index) {
      this.$confirm(
        "是否确认删除名称为" + row.buttonName + "的数据项?",
        "警告",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).then(() => {
        this.loading = true;
        restful
          .delete(row.id)
          .then(() => {
            this.getList();
            this.$message.success("删除成功");
          })
          .finally(() => {
            this.loading = false;
          });
      });
    },
    create(row, done, loading) {
      restful
        .post(row)
        .then(() => {
          this.getList();
          done();
          this.$message.success("创建成功");
        })
        .catch(() => {
          loading();
        });
    },
    update(row, index, done, loading) {
      restful
        .put(row)
        .then(() => {
          this.getList();
          done();
          this.$message.success("修改成功");
        })
        .catch(() => {
          loading();
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
