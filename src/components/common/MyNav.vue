<template>
 <div id="myNav">
   <header id="header">
     <div class="inner">

       <a v-if="isSubpage" class="back"  @click="back"> < 返回 </a>
       <div v-else>
         <a  class="logo">FUR</a>
         <nav id="nav">
           <router-link :to="{ name: 'home'}">主页</router-link>
           <a href=" http://aaamiao.xyz/about/">博客</a>
           <router-link :to="{ name : 'resume' }">在线简历</router-link>
         </nav>
       </div>
       <a class="navPanelToggle" @click="getNavPanel('#navPanel')">
         <span class="fa fa-bars"></span>
       </a>
       <nav-panel :is-visible="isVisible" @close="getChild"></nav-panel>
     </div>
   </header>
 </div>
</template>

<script>
  import NavPanel from './NavPanel';
    export default {
        name: 'myNav',
        components: {
          NavPanel
        },
        props: {
            hasHistory: {
              type: Boolean,
              default: false
            },
            isSubpage: {
                type: Boolean,
                default: false
            },
          isVisible: {
              type: Boolean,
              default: false
          }
        },
        data() {
          return {
            isVisible: false
          };
        },
      methods: {
          getNavPanel(idName) {
            document.querySelector(idName).scrollIntoView(true);
            this.isVisible = !this.isVisible;
          },
        back() {
          this.$emit('back', this.hasHistory);
        },
        // 接受子组件传来的值，关闭菜单栏
        getChild(data) {
            this.isVisible = data;
        }
      }
    };
</script>

<style  scoped>
.back{
  cursor: pointer;
  position: relative;
  right: 80%;
}
</style>
