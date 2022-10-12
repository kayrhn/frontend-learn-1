<template>
  <div id="app">
    <welcome_home />
  
    <!-- <router-link to="">欢迎页</router-link>
    <router-view></router-view> -->
    
  </div>
</template>

<script>
import welcome_home from './view/welcome_home.vue'

export default {
  name: 'App',
  components: {
    welcome_home
  }
}
</script>

<style>

</style>
