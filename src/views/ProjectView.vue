<script setup>
import { data } from '../Data';
</script>
<template>
    <div class="w-full h-screen flex items-center justify-center">
    <div class="w-11/12 h-3/6 mx-auto grid grid-cols-4 gap-8">
       <div class="sidebar" v-for="(datas,index) in data" :key="datas.id">
        <div class="w-11/12 mx-auto ">
            <img  class='rounded-lg h-64 object-contain' :src="datas.foto">
        </div>
        <div class="mt-6 w-full text-center">
            <h1 class="font-roboto text-xl text-white font-bold">{{datas.nama}}</h1>
            <button class="w-11/12 mx-auto py-4 rounded-lg mt-10 sidebar"><a class="text-white font-roboto text-xl" :href="datas.url">See Project</a></button>
        </div>
       </div>
    </div>
    </div>
</template>