import { crud } from "@/settings";
const $http = window.$http;
// 获取租户
export function queryProductTenantPageList(params) {
  return $http.request({
    url: crud + "/product/getProductAndTenant",
    params,
  });
}
