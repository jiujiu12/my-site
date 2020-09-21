<template>
    <div id="fullPage" class="fullPage" ref="fullPage">
        <div
          class="fullPageContainer"
          ref="fullPageContainer"
          @mousewheel.native="mouseWheelHandle"
          >
          <div class="section section1">1</div>
          <div class="section section2">2</div>
          <div class="section section3">3</div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'fullPage',
        data() {
          return {
            fullPage: {
              currentPage: 1,
              isScrolling: false,
              deltaY: 0
            },
            i: 0
          };
        },
      created() {
          this.$nextTick(() => {
            // 设置需要切换的高度
            let height = document.documentElement.clientHeight;
            let navHeight = document.getElementById('header').clientHeight;
            let footerHeight = document.getElementById('footer').clientHeight;
            document.getElementsByClassName('fullPage')[0].style.height = height - navHeight - footerHeight + 'px';
            let scrollHeight = document.documentElement.scrollHeight;
            console.log(scrollHeight);
          });
      },
      mounted () {
        // 监听（绑定）滚轮 滚动事件
      },
      methods: {
          next() {
            const len = 3;
            if (this.fullPage.currentPage + 1 <= len) {
              this.fullPage.currentPage += 1;
              this.moveDirec(this.fullPage.currentPage);
            }
          },
          prev() {
            if (this.fullPage.currentPage - 1 > 0) {
              this.fullPage.currentPage -= 1;
              this.moveDirec(-this.fullPage.currentPage);
            }
          },
          moveDirec(index) {
            this.$refs['fullPageContainer'];
          },
          mouseWheelHandle(e) {
            // // const ev = e || window.event;
            // this.fullPage.deltaY = e.deltaY;
            // // console.log()
            // if (this.fullPage.deltaY > 0) {
            //   this.next();
            // } else if (this.fullPage.deltaY < 0) {
            //   this.prev();
            // }
            // 页面滚动距顶部距离
            console.log(e);
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            var scroll = scrollTop - this.i;
            this.i = scrollTop;
            if (scroll < 0) {
              console.log('up');
            } else {
              console.log('down');
            }
          }
        }
    };
</script>

<style scoped>
  .fullPage{
    height: 100%;
    overflow: hidden;
  }
.fullPageContainer{
  height: 100%;
  width: 100%;
}
  .section{
    height: 100%;
    width: 100%;
    background-position: center center ;
    background-repeat: no-repeat;
  }
  .section1{
    height: 100%;
    width: 100%;
    background-color: #2cc5d2;
    background-position: center center ;
    background-repeat: no-repeat;
  }
  .section2{
    height: 100%;
    width: 100%;
    background-color: #62d24f;
    background-position: center center ;
    background-repeat: no-repeat;
  }
  .section3{
    height: 100%;
    width: 100%;
    background-color: #ca4fd2;
    background-position: center center ;
    background-repeat: no-repeat;
  }
</style>
