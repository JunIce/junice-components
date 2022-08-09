export default {
  menuSpan: 24,
  detail: false,
  column: [
    {
      label: "项目编号",
      prop: "projectNo",
      span: 8,
    },
    {
      label: "立项类型",
      prop: "projectApprovalType",
      span: 8,
      type: "select",
    },
    {
      label: "关联项目",
      prop: "projectRelationId",
      span: 8,
      type: "select",
    },
    {
      label: "项目经理",
      prop: "projectManagerId",
      span: 8,
      type: "select",
      filterable: true,
    },
    {
      label: "项目名称",
      prop: "projectName",
      span: 8,
    },
    {
      label: "所属部门",
      prop: "deptId",
      span: 8,
      type: "select",
    },
    {
      label: "项目周期",
      prop: "projectDate",
      type: "daterange",
      format: "yyyy-MM-dd",
      valueFormat: "yyyy-MM-dd",
      startPlaceholder: "开始日期",
      endPlaceholder: "结束日期",
      rangeSeparator: "—",
      span: 8,
    },
    {
      label: "项目类型",
      prop: "projectType",
      span: 8,
      type: "select",
    },

    {
      label: "项目描述",
      prop: "projectDesc",
      span: 24,
      type: "textarea",
      maxRows: 5,
      minRows: 3,
      resize: false,
    },
  ],
};
