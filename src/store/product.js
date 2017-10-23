import cityUpdate from './product/city_update'
import hjtown from './product/hjtown'
import industryComplex from './product/industry_complex'
import industryComplexChild from './product/industry_complex_child'
import nscity from './product/nscity'
import rscity from './product/rscity'
import scienceTown from './product/science_town'

export default {
	namespaced:true,
	state: {
		datas: {
			path: "/product"
		},
		state: {
			isNormal:true,
			isBanner:true,
			developmentImg:'../static/405.png',
			imgs:[{}]
		}
	},
	mutations: {
			isNormal(state,payload){
				state.state.isNormal = payload;
			},
			isBanner(state,payload){
				state.state.isBanner = payload;
			},
			setImgs(state,payload){
				state.state.imgs = payload;
			}
	},
	actions: {

	},
	modules:{
		cityUpdate,
		hjtown,
		industryComplex,
		nscity,
		rscity,
		scienceTown,
		industryComplexChild
	}
}