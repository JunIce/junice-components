export default [
  {
    name: 'EButton',
    path: '/components/ebutton',
    module: () => import(`@/components/button/demo/index.vue`),
  },
  {
    name: 'EPagination',
    path: '/components/epagination',
    module: () => import(`@/components/pagination/demo/index.vue`),
  },
  {
    name: 'EPanel',
    path: '/components/epanel',
    module: () => import(`@/components/panel/demo/index.vue`),
  },
  {
    name: 'ETable',
    path: '/components/etable',
    module: () => import(`@/components/table/demo/index.vue`),
  },
  {
    name: 'ETab',
    path: '/components/etab',
    module: () => import(`@/components/tab/demo/index.vue`),
  },
];
