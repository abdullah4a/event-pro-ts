<template>
    <div>
        <q-header elevated show-if-above side="left">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Event Pro
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="bg-grey-2"
    >
      <q-list>
        <!-- User profile image -->
        <q-item>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">KP</q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ 'Abdullah Iqbal' }}</q-item-label>
            <q-item-label caption>{{ 'KP (abdullahkhan4a@gmail.com)' }}</q-item-label>
          </q-item-section>
        </q-item>
        <!-- Links -->
        <q-item clickable :to="'/'">
          <q-item-section avatar>
            <q-icon name="space_dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ 'Dashboard' }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="'/about'">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ 'About Event Pro' }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

const leftDrawerOpen: Ref<boolean> = ref(false)
</script>

<style scoped>

</style>