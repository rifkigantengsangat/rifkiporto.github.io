<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarView from './components/NavbarView.vue';

</script>

<template>
<div class="h-0 w-full md:h-12">
  <NavbarView/>
</div>
  <RouterView />
</template>


