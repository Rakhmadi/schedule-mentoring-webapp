import { createStore } from 'vuex'
import { useToast } from "vue-toastification";
import router from './router'
const toast = useToast();

const store = createStore({
    state(){
        return {
            dataCourse : [],
            dataSingleCourse : [],
            dataMentor : [],
            dataSingleMentor : [],
            dataSchedule : [],
        }
    },
    actions:{
        getCourseData(ctx){
            fetch('/api/show_course',{
                method : 'GET',
                headers: new Headers({
                    'Authorization' : `Bearer $2y$10$dhw46zOcR9HYajh3bdtMBej3fqArSzkOhSgvFR6fTzj3X.w2.eGTG`
                })
            })
            .then(x=>x.json())
            .then(x=>{
                ctx.state.dataCourse = x
            }).catch(err=>{
                console.log(err)
            })
        },
        getSingleDataCourse(ctx,data){
            return fetch(`api/single_course/${data.id}`,{
                method : 'GET',
                headers : new Headers({
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer $2y$10$dhw46zOcR9HYajh3bdtMBej3fqArSzkOhSgvFR6fTzj3X.w2.eGTG`
                })
            }).then(x=>x.json()).then(x=>{
                ctx.state.dataSingleCourse = x
            }).catch(err=>{
                console.log(err)
            })
        },
        saveDataCourse(ctx,data){
            fetch('api/create_course',{
                method : 'POST',
                headers : new Headers({
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json',
                    'Authorization' :  `Bearer $2y$10$dhw46zOcR9HYajh3bdtMBej3fqArSzkOhSgvFR6fTzj3X.w2.eGTG`,
                }),
                body : JSON.stringify(data)
            }).then(x=>{
                if(x.status === 200){
                    ctx.dispatch('getCourseData')
                    toast.success(`Course "${data.course_name}" Created`, {
                        timeout: 4000
                    });
                    router.push({path:'/course'})
                }
                return x.json()
            }).catch(err=>{
                console.log(err)
            })
        },
        deleteDataCourse(ctx,data){
            fetch(`api/delete_course/${data.id}`,{
                method : 'DELETE',
                headers : new Headers({
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer $2y$10$dhw46zOcR9HYajh3bdtMBej3fqArSzkOhSgvFR6fTzj3X.w2.eGTG`
                })
            }).then(x=>x.json()).then(x=>{
                ctx.dispatch('getCourseData')
                toast.success(`Course Deleted`, {
                    timeout: 4000
                });
            }).catch(err=>{
                console.log(err)
            })
        },
        updateDataCourse(ctx,data){
            fetch(`api/update_course/${data.id}`,{
                method : 'PUT',
                headers : new Headers({
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer $2y$10$dhw46zOcR9HYajh3bdtMBej3fqArSzkOhSgvFR6fTzj3X.w2.eGTG`
                }),
                body : JSON.stringify(data.dataUpdate)
            })
            .then(x=>x.json())
            .then(x=>{
                ctx.dispatch('getCourseData')
                toast.success(`Course "${data.dataUpdate.course_name}" Updated`, {
                    timeout: 4000
                });
                router.push({path:'/course'})
            }).catch(err=>{
                console.log(err)
            })
        },
        getMentorData(ctx){
            fetch('/api/show_mentor',{
                method: 'GET',
                headers :new Headers({
                    'Content-type' : 'Application/json',
                    'Authorization' : `Bearer $2y$10$dhw46zOcR9HYajh3bdtMBej3fqArSzkOhSgvFR6fTzj3X.w2.eGTG`
                })
            }).then(x=>x.json()).then(x=>{
                ctx.state.dataMentor = x
            }).catch(err=>{
                console.log(err)
            })
        },saveDataMentor(ctx,data){
            return fetch('api/create_mentor',{
                method : 'POST',
                headers : new Headers({
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer $2y$10$dhw46zOcR9HYajh3bdtMBej3fqArSzkOhSgvFR6fTzj3X.w2.eGTG`
                }),
                body : JSON.stringify(data)
            }).then(x=>x.json()).then(x=>{
                ctx.state.dataMentor = x
                ctx.dispatch('getMentorData')
                toast.success(`Mentor "${data.mentor_name}" Created`, {
                    timeout: 4000
                });
                router.push({path:'/mentor'})
            }).catch(err=>{
                console.log(err)
            })
        },deleteMentor(ctx,data){
            fetch(`api/delete_mentor/${data.id}`,{
                method : 'DELETE',
                headers : new Headers({
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer $2y$10$dhw46zOcR9HYajh3bdtMBej3fqArSzkOhSgvFR6fTzj3X.w2.eGTG`
                })
            }).then(x=>x.json()).then(x=>{
                ctx.dispatch('getMentorData')
                toast.success(`Mentor Deleted`, {
                    timeout: 4000
                });
            }).catch(err=>{
                console.log(err)
            })
        },getSingleDataMentor(ctx,data){
            return fetch(`api/single_mentor/${data.id}`,{
                method : 'GET',
                headers : new Headers({
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer $2y$10$dhw46zOcR9HYajh3bdtMBej3fqArSzkOhSgvFR6fTzj3X.w2.eGTG`
                })
            }).then(x=>x.json()).then(x=>{
                ctx.state.dataSingleMentor = x
            }).catch(err=>{
                console.log(err)
            })
        },updateDataMentor(ctx,data){
            fetch(`api/update_mentor/${data.id}`,{
                method : 'PUT',
                headers : new Headers({
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer $2y$10$dhw46zOcR9HYajh3bdtMBej3fqArSzkOhSgvFR6fTzj3X.w2.eGTG`
                }),
                body : JSON.stringify(data.dataUpdate)
            })
            .then(x=>x.json())
            .then(()=>{
                ctx.dispatch('getCourseData')
                toast.success(`Mentor "${data.dataUpdate.mentor_name}" Updated`, {
                    timeout: 4000
                });
                router.push({path:'/mentor'})
            }).catch(err=>{
                console.log(err)
            })
        },getScheduleData(ctx){
            return fetch('api/show_schedule/',{
                method : 'GET',
                headers: new Headers({
                    'Authorization' : `Bearer $2y$10$dhw46zOcR9HYajh3bdtMBej3fqArSzkOhSgvFR6fTzj3X.w2.eGTG`
                })
            }).then(x=>x.json())
            .then(x=>{
                ctx.state.dataSchedule = x
            }).catch(err=>{
                console.log(err)
            })
        },
        saveSchedule(ctx,data){
            return fetch('api/create_schedule',{
                method : 'POST',
                headers : new Headers({
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer $2y$10$dhw46zOcR9HYajh3bdtMBej3fqArSzkOhSgvFR6fTzj3X.w2.eGTG`
                }),
                body : JSON.stringify(data)
            }).then(x=>x.json()).then(x=>{
                ctx.state.dataSchedule = x
                ctx.dispatch('dataSchedule')
                toast.success(`Schedule Created`, {
                    timeout: 4000
                });
                router.push({path:'/schedule'})
            }).catch(err=>{
                console.log(err)
            })
        }
    }
})

export default store