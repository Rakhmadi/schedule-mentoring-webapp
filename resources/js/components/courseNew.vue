<template>
    <div class="h-full mt-24 flex flex-col">
        <div class="flex mb-8 items-center justify-between">
                <h1 class="text-gray-600 font-medium text-5xl">Create Course.</h1>
                <button @click="$router.push({path:'/course'})" class="menu transition ease-in-out delay-75 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 font-medium w-max h-max py-1 px-3 my-1 ">
                    <span class="p-0 m-0">Back</span>
                </button>
        </div>
        <div class="">
            <form action="">
               <div class="flex flex-col">
                    <label for="" class="my-2 text-base font-normal text-gray-600">Course Name</label>
                    <input type="text" name="" id="" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600">
               </div>
               <div class="flex flex-col">
                    <label for="" class="my-2 text-base font-normal text-gray-600">Category Course</label>
                    <select name="" id="" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600 block appearance-none">
                        <option value="">dd</option>
                    </select>
               </div>
               <div class="flex flex-col">
                    <label for="" class="my-2 text-base font-normal text-gray-600">Level Course</label>
                    <select name="" id="" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600 block appearance-none">
                        <option value="">dd</option>
                    </select>
               </div>
               <button class="rounded-lg bg-blue-500 text-white px-3 py-2 mt-3 mr-3 font-medium text-base">Create</button>
               <button class="rounded-lg bg-yellow-300 text-gryal-600 px-3 py-2 mt-3 mr-3 font-medium text-base" type="reset">Reset</button>

            </form>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        console.log('sd');
    }
}
</script>

