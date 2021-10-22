<script lang="ts">
import Vue from 'vue'
import * as THREE from 'three'

export default Vue.extend({
  name: 'Three',
  data() {
    return {
      geometry: new THREE.BoxGeometry(),
      material: new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      ),
      renderer: new THREE.WebGLRenderer(),
    }
  },
  mounted() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    // @ts-ignore
    this.$refs.canvasRef.appendChild(this.renderer.domElement)

    const cube = new THREE.Mesh(this.geometry, this.material)

    this.scene.add(cube)
    this.camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)
      this.renderer.render(this.scene, this.camera)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
    }

    animate()
  },
})
</script>

<template>
  <div class="my-4">
    <h3 class="text-xl font-bold">Three!!</h3>
    <div ref="canvasRef"></div>
  </div>
</template>
