<template>
    <div class="h-full mt-24 flex flex-col"  data-aos="fade-zoom-in">
        <div class="flex mb-8 items-center justify-between">
                <h1 class="text-gray-600 font-medium text-5xl">Create Course.</h1>
                <button @click="$router.push({path:'/course'})" class="menu transition ease-in-out delay-75 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 font-medium w-max h-max py-1 px-3 my-1 ">
                    <span class="p-0 m-0">Back</span>
                </button>
        </div>
        <div class="">
            <form ref="form">
               <div class="flex flex-col">
                    <label for="" class="my-2 text-base font-normal text-gray-600">Course Name</label>
                    <input v-model="courseName" type="text" name="" id="" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600">
               </div>
               <div class="flex flex-col">
                    <label for="" class="my-2 text-base font-normal text-gray-600">Category Course</label>
                    <select v-model="courseCategory" name="" id="" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600 block appearance-none">
                        <option disable value="">Select Category</option>
                        <option value="itc">ITC</option>
                        <option value="language">Language</option>
                        <option value="math">Math</option>
                    </select>
               </div>
               <div class="flex flex-col">
                    <label for="" class="my-2 text-base font-normal text-gray-600">Level Course</label>
                    <select v-model="courseLevel" name="" id="" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600 block appearance-none">
                        <option disable value="">Select Level</option>
                        <option value="basic">Basic</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advance">Advance</option>
                    </select>
               </div>
               <button @click.prevent="saveData()" class="rounded-lg bg-blue-500 text-white px-3 py-2 mt-3 mr-3 font-medium text-base">Create</button>
               <button @click="n()" class="rounded-lg bg-yellow-300 text-gryal-600 px-3 py-2 mt-3 mr-3 font-medium text-base" type="reset">Reset</button>

            </form>
        </div>
    </div>
</template>
<script>
  import { useToast } from "vue-toastification";

  export default {
    setup() {
      const toast = useToast();
      return { toast }
    },
    data(){
        return {
            courseName : '',
            courseCategory: '',
            courseLevel : ''
        }
    },methods: {
        saveData(){
            this.$store.dispatch('saveDataCourse',{
                'course_name' : this.courseName,
                'course_category' : this.courseCategory,
                'course_level' : this.courseLevel
            }).then(x=>{

            })
        }
    },
}
</script>

