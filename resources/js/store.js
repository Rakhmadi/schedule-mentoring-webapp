import { createStore } from 'vuex'
import { useToast } from "vue-toastification";
import router from './router'
const toast = useToast();

const store = createStore({
    state(){
        return {
            dataCourse : [],
            dataMentor : []
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
        saveDataCourse(ctx,data){
            fetch('api/create_course',{
                method : 'POST',
                headers : new Headers({
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json',
                    'Authorization' :  `Bearer $2y$10$dhw46zOcR9HYajh3bdtMBej3fqArSzkOhSgvFR6fTzj3X.w2.eGTG`,
                }),
                body : JSON.stringify(data)
            }).then(x=>x.json()).then(x=>{
                
                ctx.dispatch('getCourseData')
                toast.success(`Course "${data.course_name}" Created`, {
                    timeout: 4000
                });
                router.push({path:'/course'})
                return x
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
        }
    }
})

export default store