<template>
    <div class="h-full mt-24 flex flex-col"  data-aos="fade-zoom-in">
        <div class="flex mb-8 items-center justify-between">
                <h1 class="text-gray-600 font-medium text-5xl">Create Mentor.</h1>
                <button @click="$router.push({path:'/mentor'})" class="menu transition ease-in-out delay-75 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 font-medium w-max h-max py-1 px-3 my-1 ">
                    <span class="p-0 m-0">Back</span>
                </button>
        </div>
        <div class="">
            <form action="" ref="form">
               <div class="grid gap-x-4 gap-y-2 grid-cols-2">
                    <div class="flex flex-col">
                         <label for="" class="my-2 text-base font-normal text-gray-600">Name mentor</label>
                         <input type="text" name="" v-model="namementor" id="" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600">
                    </div>
                    <div class="flex flex-col">
                         <label for="" class="my-2 text-base font-normal text-gray-600">Gender</label>
                         <select name="" id="" v-model="gender" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600 block appearance-none">
                             <option value="male">Male</option>
                             <option value="female">Female</option>
                         </select>
                    </div>
                    <div class="flex flex-col">
                         <label for="" class="my-2 text-base font-normal text-gray-600">Phone number</label>
                         <input type="text" name="" v-model="phone" id="" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600">
                    </div>
                    <div class="flex flex-col">
                         <label for="" class="my-2 text-base font-normal text-gray-600">Email</label>
                         <input type="email" name="" v-model="email" id="" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600">
                    </div>
               </div>

               <div class="flex flex-col">
                    <label for="" class="my-2 text-base font-normal text-gray-600">Address</label>
                    <input type="email" name="" id="" v-model="address" class="bg-gray-100 px-3 py-2 rounded-lg outline-gray-200 text-gray-600">
               </div>
               <button @click.prevent="saveMentor()" class="rounded-lg bg-blue-500 text-white px-3 py-2 mt-3 mr-3 font-medium text-base">Create</button>
               <button class="rounded-lg bg-yellow-300 text-gryal-600 px-3 py-2 mt-3 mr-3 font-medium text-base" type="reset">Reset</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        
    },data(){
        return {
            namementor : '',
            gender : '',
            phone: '',
            address : '',
            email:''
        }
    },methods:{
        saveMentor(){
            this.$store.dispatch('saveDataMentor',{
                'mentor_name' : this.namementor,
                'gender' : this.gender,
                'phone' : this.phone,
                'address' : this.address,
                'email' : this.email
            })
        }
    }
}
</script>

