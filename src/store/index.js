import Vuex from 'vuex'
import Vue from 'vue'

import home from './home'
import main from './main'
import product from './product'
import operate from './operate'
import information from './information'
import joinus from './joinus'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		navs: [{
				path: '/home',
				name: '首页'
			},
			{
				path: '/main',
				name: '百富东方',
				children: [{
						path: '/main/introduce',
						name: '企业介绍'
					},
					{
						path: '/main/team',
						name: '管理团队'
					},
					{
						path: '/main/organization',
						name: '组织架构'
					},
					{
						path: '/main/contract',
						name: '联系我们'
					}
				]
			},
			{
				path: '/product',
				name: '业务范围',
				children: [{
						path: '/product/industry_complex',
						name: '城市产业综合体',
						children: [{
								path: '/product/industry_complex_child/fcgg',
								name: '杭州·富春硅谷',
							},
							{
								path: '/product/industry_complex_child/cbd',
								name: '重庆·璧山CBD',
							},
							{
								path: '/product/industry_complex_child/wlcx',
								name: '青岛·蔚蓝创新天地',
							}
						]
					},
					{
						path: '/product/science_town',
						name: '科技小镇',
						children: [{
								path: '/product/science_town_hjtown',
								name: '东莞·黄江镇'
							},
							{
								path: '/product/science_town_rscity',
								name: '惠东·稔山科技生态城'
							}
						]
					},
					{
						path: '/product/city_update',
						name: '城市更新',
						children: [{
							path: '/product/city_update_nscity',
							name: '深圳·南山医疗器械产业园'
						}]
					}
				]
			},
			{
				path: '/operate',
				name: '产业运营',
				children:[{
					path:'/operate/operate_child/1',
					name:'商业管理'
				},
				{
					path:'/operate/operate_child/2',
					name:'物业服务'
				},
				{
					path:'/operate/operate_child/3',
					name:'智慧园区'
				},
				{
					path:'/operate/operate_child/4',
					name:'众创空间'
				},
				{
					path:'/operate/operate_child/5',
					name:'创智汇'
				},
				{
					path:'/operate/operate_child/6',
					name:'星级酒店'
				},
				{
					path:'/operate/operate_child/7',
					name:'优质院线'
				}]
			},
			{
				path: '/information',
				name: '资讯中心',
				children:[{
					path:'/information/news/1',
					name:'企业新闻'
				},
				{
					path:'/information/news/2',
					name:'媒体报道'
				},
				{
					path:'/information/news-detail',
					name:'资讯详情',
					hide:true
				},
				{
					path:'/information/video',
					name:'集团视频'
				}]
			},
			{
				path: '/joinus',
				name: '加入百富'
			}
		],
		footerDatas:{
			companyName:'深圳百富东方投资有限公司',
			netCode:'粤ICP备16100481号',
			form:'技术支持：怕啥科技',
			weixin:'../static/weixin.png',
			weibo:'../static/weibo.png',
			qcode:'../static/qcode.png',
			link:'http://weibo.com/',
			address:[{
				url:'http://www.baidu.com',
				name:'杭州·富春硅谷'
			},{
				url:'http://www.baidu.com',
				name:'青岛·蔚蓝创新天地'
			},{
				url:'http://www.baidu.com',
				name:'重庆·璧山CBD'
			}]
		}
	},
	mutations: {
		getNavs(state, payload) {
			state.navs = payload
			state.navs.chk = payload && payload.length && payload[0].path
		}
	},
	actions: {
		getNavs({ commit }) {
//			this._vm.api.getNavs((res) => {
//				console.log(res);
////				commit('getNavs', res);
//			})
		}
	},
	modules: {
		home,
		main,
		product,
		operate,
		information,
		joinus
	}
})