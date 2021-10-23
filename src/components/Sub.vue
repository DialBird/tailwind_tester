<script lang="ts">
import Vue from 'vue'
import Many from './Many.vue'
import VeryHeavy from './VeryHeavy.vue'

export default Vue.extend({
  name: 'Sub',
  components: {
    Many,
    VeryHeavy,
  },
  data() {
    return {
      list: Array.from(Array(100).keys()),
    }
  },
  mounted() {},
})
</script>

<template>
  <div class="my-4">
    <h3 class="text-xl font-bold">This is Sub</h3>
    <Many v-for="l in list" :key="l" />
    <VeryHeavy />
  </div>
</template>
