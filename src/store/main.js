import contract from './main/contract'
import introduce from './main/introduce'
import organization from './main/organization'
import team from './main/team'

export default {
	namespaced:true,
	state:{
		datas:{
			titleImg:'../static/about.png',
			path:'/main'
		}
	},
	mutations:{
		
	},
	actions:{
		
	},
	modules:{
		contract,
		introduce,
		organization,
		team
	}
}
