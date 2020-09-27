<template>
      <div id="caculate three">
        <header class="align-center">
          <!--导航条-->
          <nav id="navbar" class="nav goback">
            <ul class="nav-list">
              <li>
                <a @click="back" class="left back"> >返回</a>
              </li>
            </ul>
          </nav>
          <!--/导航条-->
        </header>

        <main>
          <br>
          <h2 class="cal-title">在线计算器</h2>
          <p>实现简单的计算</p>
          <div class="box contain">
            <br />

            <!--输入框-->
            <div class="cal ">
              <input type="text" disabled="disabled" name="" id="print" class="print" v-model="show"  /><br /><br />
              <div class=" flex flex-4">
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

        </main>
        <my-footer></my-footer>

      </div>
</template>

<script>
    import MyNav from '../common/MyNav';
    import MyFooter from '../common/MyFooter';
    export default {
        name: 'caculate',
        components: {
          MyFooter,
            MyNav
        },
        data() {
            return {
                show: '',
                disable: true,
                hasHistory: false,
                values:
                  [
                    '<-', 'CE', '√', 'T',
                    '+', '7', '8', '9',
                    '-', '4', '5', '6',
                    '*', '1', '2', '3',
                    '/', '0', '00', '.',
                    '%', '=', '(', ')'
                  ],
              storage: ''
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
        },
          back() {
            this.storage = window.localStorage;
            let user = this.storage.getItem('username');
            user === 'r' ? this.$router.push('/rhome') : this.$router.push('/zhome');
          }
      }
    };
</script>
<style lang="less" scoped>
.back{
  float: left;
  color: #bbb;
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
    width: 100%;
    position: relative;
    .cal{
      width: 50%;
      padding: 5%;
      background-color: #5a5a5a;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .print{
        color: white;
        border: white solid 3px;
      }
      .btn{
        width: 25%;
      }
    }
  }
  .cal-title{
    margin: 10rem 0 0 0;
  }

</style>
