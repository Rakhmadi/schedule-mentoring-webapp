<template>
    <div class="rounded-full mx-2 text-xs px-2 py-0.5 " :class="colorFunc" >{{category}}</div>
</template>
<script>
export default {
    props:{
        category:String,
    },computed:{
        colorFunc(){
            if(this.category === "basic"){
                return {
                    'bg-blue-200' : true,
                    'border-blue-600' : true,
                    'text-blue-600' : true,
                }
            }else if(this.category === "intermediate"){
                return {
                    'bg-purple-200' : true,
                    'border-purple-600' : true,
                    'text-purple-600' : true,
                }
            }else if(this.category === "advance"){
                return {
                    'bg-red-200' : true,
                    'border-red-600' : true,
                    'text-red-600' : true,
                }
            }else{
                return ''
            }
        }
    }
}
</script>