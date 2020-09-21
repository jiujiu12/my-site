<template>
    <div id="navPanel" :class="{visible:isVisible}" >
      <router-link :to="{ name: 'home'}" class="nav-link">主页</router-link>
      <a href=" http://aaamiao.xyz/about/" class="nav-link">博客</a>
      <router-link :to="{ name : 'resume' }">在线简历</router-link>
      <a  class="close" @click="closePanel"></a>
    </div>
</template>

<script>
    export default {
        name: 'navPanel',
        props: {
          isVisible: {
            type: Boolean,
            default: false
          }
        },
      methods: {
          closePanel() {
            this.isVisible = !this.isVisible;
            this.$emit('close', this.isVisible);
          }
      }
    };
</script>

<style scoped>
#navPanel{
}
</style>
