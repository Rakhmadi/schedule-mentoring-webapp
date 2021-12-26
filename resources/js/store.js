import { createStore } from 'vuex'

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
            }).then(x=>json()).then(x=>{
                ctx.dispatch('getCourseData')
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