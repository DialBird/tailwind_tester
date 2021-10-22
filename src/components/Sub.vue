<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'
import Many from './Many.vue'

export default Vue.extend({
  name: 'Sub',
  components: {
    Many,
  },
  data() {
    return {
      list: Array.from(Array(100).keys()),
    }
  },
  mounted() {
    console.log(_)
    // const a = [124, 2, 1, 3]
    // _.forEach(a)
  },
})
</script>

<template>
  <div class="my-4">
    <h3 class="text-xl font-bold">This is Sub</h3>
    <Many v-for="l in list" :key="l" />
  </div>
</template>
