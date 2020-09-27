<template>
<div id="calendar-component">

  <!--导航条-->
  <nav id="navbar" class="nav goback">
    <ul class="nav-list">
      <li>
        <a @click="back" class="left back"> >返回</a>
      </li>
    </ul>
  </nav>
  <!--/导航条-->

 <div class="calendar-box contain">
   <div><i>提示：如本月1号吃饭，第一个框输入1，第即可</i></div>
   <input class="day" placeholder="输入具体做事在几号" v-model="newObj.day" value="">
   <input class="thing" placeholder="输入要做的事" v-model="newObj.thing" value="">
   <button @click="addSth">提交</button>


   <el-calendar v-model="value" id="calendar">
     <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
     <template
       slot="dateCell"
       slot-scope="{date, data}">
       <!--自定义内容-->
       <div>
         {{ data.day.split('-')[1] }}
         <div class="calendar-day">{{data.day.split('-').slice(2).join('-') }}</div>
         <div v-for="item in calendarData">
           <div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1">
             <div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
               <el-tooltip class="item" effect="dark" :content="item.things" placement="right">
                 <div class="is-selected">{{item.things}}</div>
               </el-tooltip>
             </div>
             <div v-else></div>
           </div>
           <div v-else></div>
         </div>
       </div>
     </template>
   </el-calendar>
 </div>

  <my-footer></my-footer>

</div>
</template>

<script>
  import MyFooter from '../common/MyFooter';
    export default {
      name: 'calendar-component',
      components: {MyFooter},
      data() {
        return {
          newObj: {
            day: '',
            thing: ''
          },
          month: '',
          calendarData: [
            { months: ['09', '11'], days: ['15'], things: '看电影' },
            { months: ['10', '11'], days: ['02'], things: '去公园野炊' },
            { months: ['11'], days: ['02'], things: '看星星' },
            { months: ['11'], days: ['02'], things: '看月亮' }
          ],
          value: new Date()
        };
      },
      created() {
        this.calendarData = JSON.parse(window.localStorage.getItem('calendarData'));
        if (this.calendarData === '') {
          this.calendarData = [
            { months: ['09', '11'], days: ['15'], things: '看电影' },
            { months: ['10', '11'], days: ['02'], things: '去公园野炊' },
            { months: ['11'], days: ['02'], things: '看星星' },
            { months: ['11'], days: ['02'], things: '看月亮' }
          ];
        }
      },
      methods: {
        back() {
          this.storage = window.localStorage;
          let user = this.storage.getItem('username');
          user === 'r' ? this.$router.push('/rhome') : this.$router.push('/zhome');
        },
        addSth() {
          if (this.newObj.day === '' || this.newObj.thing === '') {
            alert('请补充完整表单');
          }
          let calendarData = Object.assign([], this.calendarData);
          let month = new Date().getMonth() + 1;
          let day = Number(this.newObj.day);
          console.log(day);
          month < 10 ? month = '0' + month : month;
          day < 10 ? day = '0' + day : day;
          console.log(day);
          calendarData.push({
            months: [month],
            days: [day],
            things: this.newObj.thing
          });
          this.calendarData = calendarData;
          window.localStorage.setItem('calendarData', JSON.stringify(this.calendarData));
          this.newObj.day = '';
          this.newObj.thing = '';
        }
      }

    };
</script>

<style scoped>
  .calendar-day{
    text-align: center;
    color: #202535;
    line-height: 30px;
    font-size: 12px;
  }
  .is-selected{
    color: #F8A535;
    font-size: 10px;
    margin-top: 5px;
  }
  #calendar .el-button-group>.el-button:not(:first-child):not(:last-child):after{
    content: '当月';
  }


</style>
