import http from './http'

export default {
	getNavs:getNavs
}

function getNavs(cb){
	http.get('webtype/noauth/listTree',{}).then(function(res){
		cb && cb(res);
	});
}
