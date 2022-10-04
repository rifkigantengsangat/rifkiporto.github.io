<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarView from './components/NavbarView.vue';

</script>

<template>
<div class="hidden md:block  w-full h-12">
  <NavbarView/>
</div>
  <RouterView />
</template>


