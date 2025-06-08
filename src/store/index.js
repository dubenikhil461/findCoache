import { createStore } from "vuex"
import coacheModules from './modules/coaches/index.js'

const store = createStore({
     modules: {
        coaches: coacheModules
    },
})

export default store