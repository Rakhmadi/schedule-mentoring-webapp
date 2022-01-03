<template>
    <div class="h-full mt-24 flex flex-col"  data-aos="fade-zoom-in">
        <div class="flex mb-8 items-center justify-between">
                <h1 class="text-gray-600 font-medium text-5xl">Mentor.</h1>
                <button @click="$router.push({path:'/mentor_new'})" class="menu transition ease-in-out delay-75 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 font-medium w-max h-max py-1 px-3 my-1 ">
                    <span class="p-0 m-0">Create new</span>
                </button>
        </div>
        <div class="">
            <div v-for="item in $store.state.dataMentor" :key="item.mentor_id" class="rounded-lg bg-white p-5 my-3 border border-gray-200 flex flex-col sm:flex-col md:flex-row justify-between">
                <div>
                    <h1 class="text-gray-600 text-3xl font-medium">{{item.mentor_name}}</h1>
                    <p  class="font-medium text-gray-600 text-sm mb-2">{{item.email}}</p>

                    <div class="flex flex-row items-center">
                        <p  class="font-bold text-gray-600 text-sm mr-2">
                            <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                               <path fill="currentColor" d="M17.58,4H14V2H21V9H19V5.41L15.17,9.24C15.69,10.03 16,11 16,12C16,14.42 14.28,16.44 12,16.9V19H14V21H12V23H10V21H8V19H10V16.9C7.72,16.44 6,14.42 6,12A5,5 0 0,1 11,7C12,7 12.96,7.3 13.75,7.83L17.58,4M11,9A3,3 0 0,0 8,12A3,3 0 0,0 11,15A3,3 0 0,0 14,12A3,3 0 0,0 11,9Z" />
                            </svg>
                        </p>
                        <p  class="font-medium text-gray-600 text-sm">{{item.gender}}</p>
                    </div>
                    <div class="flex flex-row items-center">
                        <p  class="font-bold text-gray-600 text-sm mr-2">
                            <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                            </svg>
                        </p>
                        <p  class="font-medium text-gray-600 text-sm">{{item.phone}}</p>
                    </div>
                    <div class="flex flex-row items-center">
                        <p  class="font-bold text-gray-600 text-sm mr-2">
                            <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                            </svg>
                        </p>
                        <p  class="font-medium text-gray-600 text-sm">{{item.address}}</p>
                    </div>
                </div>
                <div class="flex items-end">
                    <div class="mt-2 md:mt-0">
                        <button @click="$router.push({path:`/mentor_edit/${item.mentor_id}`})" class="rounded-full bg-blue-200 p-2 mx-1 mt-1">
                            <i class="text-blue-500">
                                <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                                    </svg>
                                </svg>
                            </i>
                        </button>
                        <button class="rounded-full bg-red-200 p-2 mx-1 mt-1" @click="deleteMentor(item.mentor_id)">
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
        this.$store.dispatch('getMentorData')
    },methods: {
        deleteMentor(id){
            this.$store.dispatch('deleteMentor',{
                id : id
            })
        }
    },
}
</script>