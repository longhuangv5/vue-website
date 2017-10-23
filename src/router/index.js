import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Main from '@/components/main'
import Product from '@/components/product'
import Operate from '@/components/operate'
import Information from '@/components/information'
import JoinUs from '@/components/joinus'

import Contract from '@/components/main/contract'
import Introduce from '@/components/main/introduce'
import Organization from '@/components/main/organization'
import Team from '@/components/main/team'

import CityUpdate from '@/components/product/city_update'
import Hjtown from '@/components/product/hjtown'
import IndustryComplex from '@/components/product/industry_complex'
import IndustryComplexChild from '@/components/product/industry_complex_child'
import Nscity from '@/components/product/nscity'
import Rscity from '@/components/product/rscity'
import ScienceTown from '@/components/product/science_town'

import OperateChild from '@/components/operate/operate_child'

import News from '@/components/information/news'
import NewsDetail from '@/components/information/news-detail'
import Video from '@/components/information/video'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/main',
			name: 'main',
			redirect: '/main/introduce',
			component: Main,
			children: [{
					path: '/main/introduce',
					name: 'introduce',
					component: Introduce
				},
				{
					path: '/main/team',
					name: 'team',
					component: Team
				},
				{
					path: '/main/organization',
					name: 'organization',
					component: Organization
				},
				{
					path: '/main/contract',
					name: 'contract',
					component: Contract
				}
			]
		},
		{
			path: '/product',
			name: 'product',
			redirect:'/product/industry_complex',
			component: Product,
			children: [{
					path: '/product/industry_complex',
					name: 'industry_complex',
					component: IndustryComplex
				},
				{
					path: '/product/industry_complex_child/:type',
					name: 'industry_complex_child',
					component: IndustryComplexChild
				},
				{
					path: '/product/science_town',
					name: 'science_town',
					component: ScienceTown
				},
				{
					path: '/product/science_town_hjtown',
					name: 'hjtown',
					component: Hjtown
				},
				{
					path: '/product/science_town_rscity',
					name: 'rscity',
					component: Nscity
				},
				{
					path: '/product/city_update',
					name: 'city_update',
					component: CityUpdate
				},
				{
					path: '/product/city_update_nscity',
					name: 'nscity',
					component: Nscity
				}
			]
		},
		{
			path: '/operate',
			name: 'operate',
			redirect:'/operate/operate_child/1',
			component: Operate,
			children: [{
				path: '/operate/operate_child/:type',
				name: 'operate_child',
				component: OperateChild
			}]
		},
		{
			path: '/information',
			name: 'information',
			redirect:'/information/news/1',
			component: Information,
			children: [{
					path: '/information/news/:type',
					name: 'news',
					component: News,
					meta:{
						keepAlive:true
					}
				},
				{
					path: '/information/news-detail',
					name: 'news-detail',
					component: NewsDetail
				},
				{
					path: '/information/video',
					name: 'video',
					component: Video
				}
			]
		},
		{
			path: '/joinus',
			name: 'joinus',
			component: JoinUs
		}
	]
})