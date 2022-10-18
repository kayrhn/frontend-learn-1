<template>
  <div id="app">
    <welcome_home />
    、
    <!-- <router-link to="">欢迎页</router-link>
    <router-view></router-view> -->
    
  </div>
</template>

<script>
import welcome_home from './view/welcome_home.vue'
import Welcome_home2 from './view/welcome_home2.vue';
import Welcome_sign from './view/welcome_sign.vue';

export default {
  name: 'App',
  components: {
    welcome_home,
    Welcome_home2,
    Welcome_sign
}
}
</script>

<style>

</style>
