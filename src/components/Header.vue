<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
  components: {},
  props: {},
  methods: {},
})
</script>

<template>
  <header class="container mx-auto h-20 border-b-2">
    <h1 class="text-4xl font-bold">Logo</h1>
    <div class="flex gap-4">
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'sub' }">Sub</router-link>
    </div>
  </header>
</template>
