<script setup>

</script>

<template>
    <div class="sidebar basis-[8%] h-full flex justify-center items-center" v-motion :initial="{
        opacity : 0,
        x:-300,
       
    }" :enter="{
        opacity : 1,
        x:0,
        transition:{
            delay :2000,
            x:{
                duration : 2000
            },
         opacity:{
            duration :2000
         }
        }
    }">
    <div class="h-64 w-11/12 mx-auto block ">
      <div class="flex flex-col items-center  ">
        <img src="../components/icons/icons8-github.svg" class="w-[70px] block py-4 ">
        <img src="../components/icons/icons8-tiktok.svg" class="w-[70px] block py-4">
        <img src="../components/icons/icons8-facebook.svg" class="w-[70px] block py-4">
      </div>
    </div>
    </div>
</template>