<template>
    <div class="h-full mt-24 flex flex-col"  data-aos="fade-zoom-in">
        <div class="flex mb-8 items-center justify-between">
                <h1 class="text-gray-600 font-medium text-5xl">Update Schedule.</h1>
                <button @click="$router.push({path:'/schedule'})" class="menu transition ease-in-out delay-75 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 font-medium w-max h-max py-1 px-3 my-1 ">
                    <span class="p-0 m-0">Back</span>
                </button>
        </div>
        <div class="">
            <form ref="form">
               <div class="flex flex-col">
                    <label for="" class="my-2 text-base font-normal text-gray-600">Course</label>
                    <select v-model="course_code" name="" id="" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600 block appearance-none">
                        <option disable value="">Select Category</option>
                        <option v-for="(item,index) in $store.state.dataCourse" :key="index" :value="item.course_code">{{item.course_name}}</option>
                    </select>
               </div>
               <div class="flex flex-col">
                    <label for="" class="my-2 text-base font-normal text-gray-600">Mentor</label>
                    <select v-model="mentor_id" name="" id="" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600 block appearance-none">
                        <option disable value="">Select Level</option>
                        <option v-for="(item,index) in $store.state.dataMentor" :key="index" :value="item.mentor_id">{{item.mentor_name}}</option>

                    </select>
               </div>
               <div class="flex flex-col">
                    <label for="" class="my-2 text-base font-normal text-gray-600">Start Time</label>
                    <input v-model="startTime" type="time" name="" id="" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600">
               </div>
               <div class="flex flex-col">
                    <label for="" class="my-2 text-base font-normal text-gray-600">Finish Time</label>
                    <input v-model="finishTime" type="time" name="" id="" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600">
               </div>
               <div class="flex flex-col">
                    <label for="" class="my-2 text-base font-normal text-gray-600">Date</label>
                    <input v-model="date" type="date" name="" id="" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600">
               </div>
               <button @click.prevent="saveData()" class="rounded-lg bg-blue-500 text-white px-3 py-2 mt-3 mr-3 font-medium text-base">Edit</button>
               <button @click="n()" class="rounded-lg bg-yellow-300 text-gryal-600 px-3 py-2 mt-3 mr-3 font-medium text-base" type="reset">Reset</button>

            </form>
        </div>
    </div>
</template>
<script>
export default {
    async beforeMount(){
        await this.$store.dispatch('getMentorData')
        await this.$store.dispatch('getCourseData')
        this.$store.dispatch('getSingleDataSchedule',{
            'id' : this.$route.params.schedule_id
        }).then(()=>{
            this.singleScheduleData = this.$store.state.dataSingleSchedule
            this.startTime = this.singleScheduleData.start_time
            this.finishTime = this.singleScheduleData.finish_time
            this.date = this.singleScheduleData.schedule_date
            this.mentor_id = this.singleScheduleData.mentor_id
            this.course_code = this.singleScheduleData.course_code

        })

    },
    data() {
        return {
            startTime:'',
            finishTime:'',
            date:'',
            mentor_id:'',
            course_code:'',
            singleScheduleData : []
        }
    },
    methods : {
        updateCourse() {
            this.$store.dispatch('updateDataCourse',{
                'id' : this.$route.params.code_course,
                'dataUpdate' : {
                    'course_name' : this.courseName,
                    'course_category' : this.courseCategory,
                    'course_level' : this.courseLevel
                }
            })
        },
    }
}
</script>

