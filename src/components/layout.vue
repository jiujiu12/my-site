<template>
    <div id="layout"  :class="{subpage:isSubpage}">
      <!-- Header -->
<!--      <my-nav-->
<!--        :has-history="hasHistory"-->
<!--        :is-subpage="isSubpage"-->
<!--        :is-visible="isVisible"-->
<!--        @back="goBack"-->
<!--      > </my-nav>-->

      <!--内容-->
      <router-view></router-view>

      <!-- Footer -->
      <my-footer></my-footer>
    </div>
</template>

<script>
  import MyNav from './common/MyNav';
  import MyFooter from './common/MyFooter';
  import NavPanel from './common/NavPanel';
    export default {
        name: 'layout',
        components: {
          MyNav,
          MyFooter,
          NavPanel
        },
        data() {
          return {
            hasHistory: false,
            isSubpage: false,
            isVisible: false
          };
        },
        created() {
          if (this.$route.path === '/home') {
            this.isSubpage = false;
            // this.hasHistory = false;
          } else {
            this.isSubpage = true;
            // this.hasHistory = true;
          }
        },
        watch: {
          '$route.path' () {
            this.isVisible = false;
            if (this.$route.path === '/home') {
              this.isSubpage = false;
              // this.hasHistory = false;
            } else {
              this.isSubpage = true;
              if (window.history.length > 0) {
                this.hasHistory = true;
              }
            }
           }
        },
      methods: {
          goBack(has) {
            has ? this.$router.go(-1) : this.$router.push('/home');
          }
      }
    };
</script>

<style scoped>
</style>
