<template>
    <div class="h-full mt-24 flex flex-col" data-aos="fade-zoom-in">
        <div class="flex mb-8 items-center justify-between">
                <h1 class="text-gray-600 font-medium text-5xl">Course.</h1>

                <button @click="$router.push({path:'/course_new'})" class="menu transition ease-in-out delay-75 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 font-medium w-max h-max py-1 px-3 my-1 ">
                    <span class="p-0 m-0">Create new</span>
                </button>
        </div>
        <div class="">
            <div v-for="item in $store.state.dataCourse" :key="item.course_code" class="rounded-lg bg-white p-5 my-3 border border-gray-200 flex flex-col sm:flex-col md:flex-row justify-between">
                <div>
                    <h1 class="text-gray-600 text-3xl font-medium mb-3">{{item.course_name}}</h1>
                    <div class="mt-1 flex flex-row items-center">
                        <p  class="font-medium text-gray-600 text-sm">Category</p>
                        <div class="rounded-full mx-2 text-xs px-2 py-0.5 bg-blue-200  border-blue-600 text-blue-600 w-max ">{{item.course_category}}</div>
                    </div>
                    <div class="mt-1 flex flex-row items-center">
                        <p  class="font-medium text-gray-600 text-sm">Level</p>
                        <category-lable :category="item.course_level"></category-lable>
                    </div>
                </div>
                <div class="flex items-end">
                    <div class="mt-2 md:mt-0">
                        <button class="rounded-full bg-blue-200 p-2 mx-1 mt-1" @click="$router.push({path:`/course_edit/${item.course_code}`})">
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

export default {
    components:{
        'categoryLable' : categoryLableVue
    },
    mounted(){
        this.$store.dispatch('getCourseData');
    },
    methods: {
        delDataCourse(id){
            this.$store.dispatch('deleteDataCourse',{
                'id' : id
            })
        }
    },
    data(){
        return {

        }
    },
}
</script>

