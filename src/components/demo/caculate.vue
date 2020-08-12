<template>
  <div id="caculate" class="subpage">
    <header id="header">
      <div class="inner">
        <a @click="$router.go(-1)"> < 返回 </a>
      </div>
    </header>

    <!-- Three -->
    <section id="three" class="wrapper">
      <div class="inner content">
        <header class="align-center">
          <h2>在线计算器</h2>
          <p>实现简单的计算</p>
        </header>

        <div class="box"><br />
          <!--输入框-->
          <div class="cal">
            <input type="text" disabled="disabled" name="" id="print" class="print" v-model="show"  /><br /><br />
            <div class="">
              <button
                class="btn"
                v-for="(item,index) in values"
                :key="index"
                @click="cone(item)"
              >
                <a  class="fun">{{item}}</a>&nbsp;
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="footer">
      <div class="inner">
        <div class="flex">
          <div class="copyright">
            &copy; CopyRight: 京 ICP 证 110745 号.
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
    export default {
        name: 'caculate',
        data() {
            return {
                show: '',
                disable: true,
                values:
                  [
                    '<-', 'CE', '√', 'T',
                    '+', '7', '8', '9',
                    '-', '4', '5', '6',
                    '*', '1', '2', '3',
                    '/', '0', '00', '.',
                    '%', '=', '(', ')'
                  ]
            };
        },
        methods: {
          cone(item) {
              switch (item) {
                case '√':
                    this.disable ? this.show = Math.sqrt(document.getElementById('print').value) : this.show;
                  break;
                case 'CE':
                  this.disable = true;
                  this.show = '';
                  break;
                case '=':
                    // eslint-disable-next-line no-eval
                  this.disable ? this.show = eval(document.getElementById('print').value) : this.show;
                  break;
                case 'T':
                  var mytime = new Date();
                  this.show = mytime.toLocaleString();
                  this.disable = false;
                  break;
                case '<-':
                  this.disable ? this.show = document.getElementById('print').value.substr(0, document.getElementById('print').value.length - 1) : this.show;
                  break;
                case '%':
                  this.disable ? this.show = 0.01 * document.getElementById('print').value : this.show;
                  break;
                case 'sin':
                  this.disable ? this.show = Math.sin(document.getElementById('print').value) : this.show;
                  break;
                case 'cos':
                  this.disable ? this.show = Math.cos(document.getElementById('print').value) : this.show;
                  break;
                case 'tan':
                  this.disable ? this.show = Math.tan(document.getElementById('print').value) : this.show;
                  break;
                default:
                  this.disable ? this.show = this.show + item : this.show;
                  break;
              }
        }
      }
    };
</script>
<style>@import '../../common/style/css/main.css';</style>
<style lang="less" scoped>
  /*计算器边框*/
  #caculate{
  }
  /*结果输出框*/

  a{
    text-decoration: none;
    color: white;
  }
  .content{
    max-width: 50%;
  }
  .box{
    height: 500px;
    position: relative;
    .cal{
      padding: 5%;
      background-color: #5a5a5a;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .print{
        color: white;
      }
      .btn{
        width: 25%;
      }
    }
  }

</style>
