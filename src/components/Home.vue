<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'

export default Vue.extend({
  name: 'Home',
  mounted() {
    console.log(_)
  },
})
</script>

<template>
  <div class="my-4">
    <h3 class="text-xl font-bold">This is Home</h3>
  </div>
</template>
