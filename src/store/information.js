import news from './information/news'
import newsDetail from './information/news-detail'
import video from './information/video'

export default {
	namespaced:true,
	state:{
		datas:{
			path:'/information',
			titleImg:'../static/news.jpg',
			titleImg2:'../static/news2.png',
			type:1
		}
	},
	mutations:{
		setType(state,payload){
			state.datas.type = payload;
		}
	},
	actions:{
		
	},
	modules:{
		news,
		newsDetail,
		video
	}
}
