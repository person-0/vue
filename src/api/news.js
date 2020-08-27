import request from "@/utils/request";

async function getList(data) {
  let res = await request({
    url: "/api/v2/seller/news",
    method: "GET",
    params: data
  });
  return res;
}
async function del(id) {
  let res = await request({
    url: `/api/v2/seller/news/${id}`,
    method: "delete",
  });
  return res;
}
async function add(data) {
  let res = await request({
    url: "/api/v2/seller/news",
    method: "post",
    data
  });
  return res;
}
async function edit(id, data) {
  let res = await request({
    url: `/api/v2/seller/news/${id}`,
    method: "put",
    data
  });
  return res;
}

export default {
  getList,
  add,
  del,
  edit
}