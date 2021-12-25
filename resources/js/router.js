import {createRouter,createWebHashHistory} from 'vue-router'
import wellcome from './components/wellcome.vue';

import course from './components/course.vue';
import courseNew from './components/courseNew.vue';
import courseEdit from './components/courseEdit.vue';

import mentor from './components/mentor.vue';
import mentorNew from './components/mentorNew.vue';

import schedule from './components/schedule.vue';

const router = createRouter({
    history : createWebHashHistory(),
    routes : [
        {
            path : '/',
            component : wellcome
        },{
            path : '/course',
            component : course
        },{
            path: '/course_new',
            component : courseNew
        },{
            path: '/course_edit/:code_course',
            component : courseEdit
        },{
            path : '/mentor',
            component : mentor
        },{
            path : '/mentor_new',
            component : mentorNew
        },{
            path : '/schedule',
            component : schedule
        }
    ]
})

export default router