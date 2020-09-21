<template>
      <div id="caculate three" class="inner content wrapper">
        <header class="align-center">
          <h2>在线计算器</h2>
          <p>实现简单的计算</p>
        </header>

        <div class="box"><br />
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
      </div>
</template>

<script>
    import MyNav from '../common/MyNav';
    export default {
        name: 'caculate',
        components: {
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
                  ]
            };
        },
      mounted() {
          if (window.history < 0) {
            this.hasHistory = false;
          } else {
            this.hasHistory = true;
          }
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
        border: white solid 3px;
      }
      .btn{
        width: 25%;
      }
    }
  }

</style>
