<template>
  <component :is="layoutComp"></component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const layoutComp = computed(()=>{
  return 'defaultLayout'
})
</script>
