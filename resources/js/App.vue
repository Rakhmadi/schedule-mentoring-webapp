<template>
    <div class="h-screen bg-[url('C:\Users\Rakhmadi D\Documents\SVG\Artboard 1.svg')]">
        <div class="fixed top-0 w-full z-10">
                <div class="flex justify-between h-14 bg-blue-100 px-48">
                    <div class="flex items-center ">
                        <button @click="$router.push({path:'/course'})" class="menu transition ease-in-out delay-75 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 font-medium w-max h-max py-1 px-3 mr-2 my-1 ">
                            <span class="p-0 m-0">Course</span>
                        </button>
                        <button @click="$router.push({path:'/mentor'})" class="menu transition ease-in-out delay-75 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 font-medium w-max h-max py-1 px-3 mr-2 my-1 ">
                            <span class="p-0 m-0">Mentor</span>
                        </button>
                        <button @click="$router.push({path:'/schedule'})" class="menu transition ease-in-out delay-75 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 font-medium w-max h-max py-1 px-3 mr-2 my-1 ">
                            <span class="p-0 m-0">Schedule</span>
                        </button>
                    </div>
                    <div class="flex items-center">
                        <button class="menu transition ease-in-out delay-75 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 font-medium w-max h-max py-1 px-3 mr-2 my-1 flex flex-row items-center">
                            <i class="mr-2">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 16L21 12M21 12L17 8M21 12H7M13 16V17C13 17.7956 12.6839 18.5587 12.1213 19.1213C11.5587 19.6839 10.7956 20 10 20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H10C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7V8" stroke="#3F3F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </i>
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
        </div>
        <main class="mx-12 md:mx-48  font-bold block h-screen">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    data(){
        return {
            data:'Hello'
        }
    }
}
</script>