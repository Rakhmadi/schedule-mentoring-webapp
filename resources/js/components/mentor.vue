<template>
    <div class="h-full mt-24 flex flex-col">
        <div class="flex mb-8 items-center justify-between">
                <h1 class="text-gray-600 font-medium text-5xl">Mentor.</h1>
                <button @click="$router.push({path:'/mentor_new'})" class="menu transition ease-in-out delay-75 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 font-medium w-max h-max py-1 px-3 my-1 ">
                    <span class="p-0 m-0">Create new</span>
                </button>
        </div>
        <div class="">
            <div class="rounded-lg bg-white p-5 my-3 border border-gray-200 flex flex-col sm:flex-col md:flex-row justify-between">
                <div>
                    <h1 class="text-gray-600 text-3xl font-medium mb-3">Saitama</h1>
                    <div class="flex flex-row items-center">
                        <p  class="font-bold text-gray-600 text-sm mr-2">Gender</p>
                        <p  class="font-medium text-gray-600 text-sm">Male</p>
                    </div>
                    <div class="flex flex-row items-center">
                        <p  class="font-bold text-gray-600 text-sm mr-2">Phone</p>
                        <p  class="font-medium text-gray-600 text-sm">0839343432</p>
                    </div>
                    <div class="flex flex-row items-center">
                        <p  class="font-bold text-gray-600 text-sm mr-2">Address</p>
                        <p  class="font-medium text-gray-600 text-sm">Jl. kearah seletan no12</p>
                    </div>
                    <div class="flex flex-row items-center">
                        <p  class="font-bold text-gray-600 text-sm mr-2">Email</p>
                        <p  class="font-medium text-gray-600 text-sm">saitama@nani.kore</p>
                    </div>
                </div>
                <div class="flex items-end">
                    <div class="mt-2 md:mt-0">
                        <button class="rounded-full bg-blue-200 p-2 mx-1 mt-1">
                            <i class="text-blue-500">
                                <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                                    </svg>
                                </svg>
                            </i>
                        </button>
                        <button class="rounded-full bg-red-200 p-2 mx-1 mt-1">
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
</template>
<script>
export default {
    mounted(){
        console.log('sd');
    }
}
</script>