<script setup>

</script>
<template>
    <div class="w-full h-full pt-44 ml-4 ">
      <div class="flex flex-col ">
     <div>
        <div v-motion :initial="{
            opacity : 0,
            y:-50,
            x:40
           
        }" :enter="{
            opacity : 1,
            y:0,
            x:0,
            transition:{
                delay :4000,
                y:{
                    duration : 2000
                },
                x:{
                duration : 2000
                },
             opacity:{
                duration :2000
             }
            }
        }" >
            <h1 class=" text-md md:text-xl font-medium font-roboto text-white"  >Hello I'm </h1>
        </div>
        <div v-motion :initial="{
            opacity : 0,
            y:50,
            x:10
           
        }" :enter="{
            opacity : 1,
            y:0,
            x:0,
            transition:{
                delay :4000,
                y:{
                    duration : 2000
                },
                x:{
                duration : 2000
                },
             opacity:{
                duration :2000
             }
            }
        }">
            <h1 class=" text-2xl md:text-6xl font-extrabold font-roboto text-white name pt-4">Raden Muhamad Rifki </h1>
        </div>
        <div v-motion :initial="{
            opacity : 0,
            y:50
           
        }" :enter="{
            opacity : 1,
            y:0,
            x:0,
            transition:{
                delay :4000,
                y:{
                    duration : 1500
                },
                x:{
                duration : 2000
                },
             opacity:{
                duration :2000
             }
            }
        }">
            <h1 class="text-lg md:text-2xl font-extrabold font-roboto text-white  pt-4">Frontend Developer Based In Bogor </h1>
        </div>
     </div>
      </div>
      <div class="flex justify-between mt-6 w-64 gap-4" >
    <div class=" w-1/3 md:w-1/2 flex items-center justify-center sidebar h-10 rounded-md hover:bg-red-700" v-motion :initial="{
        opacity:0,
        y:100,
      }" :enter="{
        opacity:1,
        y:0,
        transition:{
            delay:1000,
            y:{
                duration:2000
            }

        }
      }">
        <router-link to="/projects"  class="text-sm font-roboto text-white block">See Project</router-link>
    </div>
    <div class=" w-1/3 md:w-1/2 flex items-center justify-center sidebar h-10 rounded-md hover:bg-red-700" v-motion :initial="{
        opacity:0,
        y:100,
      }" :enter="{
        opacity:1,
        y:0,
        transition:{
            delay:1000,
            y:{
                duration:2000
            }

        }
      }">
        <router-link to="/projects" class="text-sm font-roboto text-white block">See Project</router-link>
    </div>
      </div>
    </div>
</template>