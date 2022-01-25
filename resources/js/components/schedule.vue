<template>
    <div class="h-full mt-24 flex flex-col" data-aos="fade-zoom-in">
        <div class="flex mb-8 items-center justify-between">
                <h1 class="text-gray-600 font-medium text-5xl">Schedule.</h1>

                <button @click="$router.push({path:'/schedule_new'})" class="menu transition ease-in-out delay-75 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 font-medium w-max h-max py-1 px-3 my-1 ">
                    <span class="p-0 m-0">Create new</span>
                </button>
        </div>
        <div class="">
            <div v-for="item in DataSchedule" :key="item.schedule_id" class="rounded-lg bg-white p-5 my-3 border border-gray-200 flex flex-col sm:flex-col md:flex-row justify-between">
                <div>
                    <h1 class="text-gray-600 text-3xl font-medium leading-none">{{item.course.course_name}}</h1>
                    <h2 class="text-gray-600 text-base font-medium leading-none mt-2">{{item.mentor.mentor_name}}</h2>
                    <h3 class="text-gray-600 text-xs font-medium leading-none">{{item.mentor.email}}</h3>

                    <div class="mt-1 flex flex-row items-center">
                        <p  class="font-medium text-gray-600 text-sm ">Category</p>
                        <div class="rounded-full mx-2 text-xs px-2 py-0.5 bg-blue-200  border-blue-600 text-blue-600 w-max ">{{item.course.course_category}}</div>
                    </div>
                    <div class="mt-1 flex flex-row items-center">
                        <p  class="font-medium text-gray-600 text-sm">Level</p>
                        <category-lable :category="item.course.course_level"></category-lable>
                    </div>
                    <div class="mt-1 flex flex-row items-center">
                        <p  class="font-medium text-gray-600 text-sm ">Date</p>
                        <div class="rounded-full mx-2 text-xs px-2 py-0.5 bg-white  border-blue-600 text-gray-600 w-max ">{{getDate(item.schedule_date)}}</div>
                    </div>
                    <div class="mt-1 flex flex-row items-center">
                        <p  class="font-medium text-gray-600 text-sm ">Time</p>
                        <div class="rounded-full mx-2 text-xs px-2 py-0.5 bg-white  border-blue-600 text-gray-600 w-max ">{{item.start_time}} - {{item.finish_time}}</div>
                    </div>
                </div>
                <div class="flex items-end">
                    <div class="mt-2 md:mt-0">
                        <button class="rounded-full bg-blue-200 p-2 mx-1 mt-1" @click="$router.push({path:`/schedule_edit/${item.schedule_id}`})">
                            <i class="text-blue-500">
                                <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                                    </svg>
                                </svg>
                            </i>
                        </button>
                        <button @click="delDataCourse(item.course_code)" class="rounded-full bg-red-200 p-2 mx-1 mt-1">
                            <i class="text-red-500">
                                <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                                </svg>
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="flex-1 space-y-6 py-1">
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-gray-200 rounded col-span-2"></div>
          <div class="h-2 bg-gray-200 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
</div> -->
</template>
<script>
import categoryLableVue from "./categoryLable.vue";
import moment from 'moment'

export default {
    components:{
        'categoryLable' : categoryLableVue
    },
    mounted(){
        this.$store.dispatch('getScheduleData').then(()=>{
            this.DataSchedule = this.$store.state.dataSchedule
        });
        console.log(this.getDate('2021-05-05'))
    },
    methods: {
        delDataCourse(id){
            this.$store.dispatch('deleteDataCourse',{
                'id' : id
            })
        },
        getDate(date){
            return moment(date).format("dddd, MMMM Do YYYY")
        }
    },
    data(){
        return {
            DataSchedule : []
        }
    },
}
</script>

