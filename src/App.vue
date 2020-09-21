<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
<!--    <h1>{{ vm.$t('today') }}</h1>-->
<!--    <h3>{{ $t('today') }}</h3>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import UserHome from './pages/UserHome';
export default {
  name: 'app',
  components: {UserHome},
  data() {
    // const vm = window.vm;
    return {
      // vm: vm
    };
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
