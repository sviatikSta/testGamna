import VueRouter from 'vue-router'
import LoginForm from '../components/LoginForm'
import Registration from '../components/RegistrationForm'


export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path : '/',
            name: 'Login',
            component : LoginForm
        },
        {
            path : '/registration',
            name: 'Registration',
            component : Registration
        },
    ]
})