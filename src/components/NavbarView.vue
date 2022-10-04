<script setup>
import { useRoute, useRouter } from 'vue-router';

const router =useRoute()
const path = router.path
</script>

<template>
<div class="w-full h-12 fixed bottom-0 bg-navbar md:top-0 navbar z-30" v-motion :initial="{
    opacity : 0,
    y:-100,
   
}" :enter="{
    opacity : 1,
    y:0,
    transition:{
        delay :1000,
        y:{
            duration : 2000
        },
     opacity:{
        duration :2000
     }
    }
}">
<div class="flex items-center  md:justify-start justify-center gap-4 h-full font-monserrat">
 <div class="mx-4">
    <router-link to="/" :class="router.path ==='/' ? 'text-red-700 font-bold' : 'text-white font-light' ">Home</router-link>
 </div>
 <div class="mx-4">
    <router-link to="/about"  :class="router.path ==='/about' ? 'text-red-700 font-bold' : 'text-white font-light' ">About</router-link>
 </div>
 <div class="mx-4">
    <router-link to="/projects"  :class="router.path ==='/projects' ? 'text-red-700 font-bold' : 'text-white font-light' ">Project</router-link>
 </div>
</div>
</div> 
</template>