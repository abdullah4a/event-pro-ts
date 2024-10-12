<template>
  <q-layout view="lhh lpR lFf">
    <SideMenu />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    <MainFooter />
  </q-layout>
</template>

<script setup lang="ts">
import SideMenu from '@/components/nav/SideMenu.vue';
import MainFooter from '@/components/footer/MainFooter.vue';
</script>

<style scoped></style>
