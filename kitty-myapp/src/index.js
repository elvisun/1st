import vue from 'vue'
import router from 'vue-router'
import Login from './components/Login'

Vue.use(router)

export default new router({
    routes :{
        path :'/',
        name :'Login',
        component : Login
    }
})


