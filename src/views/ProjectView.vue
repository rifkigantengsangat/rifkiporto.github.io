<script setup>
import { data } from '../Data';
</script>
<template>
    <div class="w-full h-screen flex md:items-center md:justify-center">
    <div class="w-11/12 h-3/6 mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-8 gap-2">
       <div class="sidebar rounded-lg" v-for="(datas,index) in data" :key="datas.id">
        <div class="w-11/12 mx-auto ">
            <img  class='rounded-lg h-64 object-contain' :src="datas.foto">
        </div>
        <div class="mt-6 w-full text-center">
            <h1 class="font-roboto text-md md:text-xl text-white font-bold">{{datas.nama}}</h1>
            <h1 class="font-roboto text-lg text-white font-light pt-3">Teknologi : {{datas.stack}}</h1>
            <button class="w-11/12 mx-auto py-2 md:py-4 rounded-lg mt-2 sidebar"><a class="text-white font-roboto text-xl" :href="datas.url">See Project</a></button>
        </div>
       </div>
    </div>
    </div>
</template>