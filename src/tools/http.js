import axios from 'axios'

const parkId = '76c7fae2b31911e78e60109836b282e1'

export default {
	get: get,
	post: post
}

function get(url, params) {
	let a, b
	send('GET',url,params).then(function(res){
		a && a(res);
	},function(res){
		b && b(res);
	})
	return {
		then: function(success, fail) {
			a = success;
			b = fail;
		}
	}
}

function post(url, params, data) {
	let a, b
	send('POST',url,params,data).then(function(res){
		a && a(res);
	},function(res){
		b && b(res);
	})
	return {
		then: function(success, fail) {
			a = success;
			b = fail;
		}
	}
}

function send(method, url, params, data) {
	let a, b;
	params.parkId = parkId;
	axios({
		method: method,
		url: url,
		baseURL: 'http://192.168.1.199:8080/saas/',
		params: params,
		data: data
	}).then(function(res) {
		if(res.data.result) {
			a && a(res.data.data);
		} else {
			console.error(res.data.execMessage);
			b && b(res.data.execMessage);
		}
	}).catch(function(error) {
		console.error(error.response);
		b && b(error.response);
	});

	return {
		then: function(success, fail) {
			a = success;
			b = fail;
		}
	}
}