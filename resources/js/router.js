import {createRouter,createWebHashHistory} from 'vue-router'
import wellcome from './components/wellcome.vue';

import course from './components/course.vue';
import courseNew from './components/courseNew.vue';
import courseEdit from './components/courseEdit.vue';

import mentor from './components/mentor.vue';
import mentorNew from './components/mentorNew.vue';
import mentorEdit from './components/mentorEdit.vue';

import schedule from './components/schedule.vue';
import scheduleNew from './components/scheduleNew.vue';
import scheduleEdit from './components/scheduleEdit.vue';

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
            path : '/mentor_edit/:mentor_id',
            component : mentorEdit
        },{
            path : '/schedule',
            component : schedule
        },{
            path : '/schedule_new',
            component : scheduleNew
        },{
            path : '/schedule_edit/:schedule_id',
            component : scheduleEdit
        }
    ]
})

export default router