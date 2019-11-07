
import request from '@/utils/request'

async function addVisitor(data) {
	return request({
		url: '/api/v2/seller/visitor',
		method: 'post',
		data
	})
}

async function getVisitor(data) {
	let res = await request({
				url: '/api/v2/common/visitor',
				method: 'get',
				params: data
			});

	return res;
}

async function addGif(data) {
	return request({
		url: '/api/v2/seller/gif',
		method: 'post',
		data
	})
}

async function getGif(data) {
	let res = await request({
				url: '/api/v2/common/gif',
				method: 'get',
				params: data
			});

	return res;
}

async function addApk(data){
	return request({
		url: '/api/v2/seller/androidversion',
		method: 'post',
		data
	})
}

async function getApk(data) {
	let res = await request({
				url: '/api/v2/common/androidversion',
				method: 'get',
				params: data
			});

	return res;
}

// app share
async function getShareList(data) {
	let res = await request({
				url: '/api/v2/seller/appactivity',
				method: 'get',
				params: data
			});

	return res;
}

async function addShare(data){
	return request({
		url: '/api/v2/seller/appactivity',
		method: 'post',
		data
	})
}

async function setShare(id, data){
	return request({
		url: `/api/v2/seller/appactivity/${id}`,
		method: 'put',
		data
	})
}

async function deleteShare(id, data){
	return request({
		url: `/api/v2/seller/appactivity/${id}`,
		method: 'delete',
		data
	})
}

async function changeShare(id, data){
	return request({
		url: `/api/v2/seller/appactivity/${id}/edit`,
		method: 'get',
		data
	})
}

// async function editClassList(data) {
// 	let res = await request({
// 				url: '/api/v2/seller/storegc/'+data.storegc_id,
// 				method: 'put',
// 				data
// 			});

// 	return res;
// }

// async function deleteClassList(data) {
// 	let res = await request({
// 				url: '/api/v2/seller/storegc/'+data,
// 				method: 'delete',
// 			});

// 	return res;
// }


export default {
	addVisitor,
  getVisitor,
  addGif,
  getGif,
  addApk,
  getApk,

  getShareList,
  addShare,
  setShare,
  deleteShare,
  changeShare,
}