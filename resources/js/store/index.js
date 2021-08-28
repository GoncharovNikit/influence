import {createStore} from 'vuex'
import {commonFlagsModule} from './modules/commonFlagsModule'
import {userModule} from './modules/userModule'

export default createStore({
    modules: {
        commonFlags: commonFlagsModule,
        user: userModule,
    },
})