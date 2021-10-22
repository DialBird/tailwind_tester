<script lang="ts">
import Vue from 'vue'
import Header from './Header.vue'

export default Vue.extend({
  name: 'Layout',
  components: { Header },
  props: {},
  methods: {},
})
</script>

<template>
  <div class="h-screen">
    <Header />
    <router-view />
  </div>
</template>
