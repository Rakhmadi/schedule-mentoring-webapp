import {createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
    history : createWebHashHistory(),
    routes : [
        {
            path : '/',
            component : import('./components/wellcome.vue')
        },{
            path : '/course',
            component : import('./components/course.vue')
        },{
            path : '/mentor',
            component : import('./components/mentor.vue')
        },{
            path : '/schedule',
            component : import('./components/schedule.vue')
        }
    ]
})

export default router