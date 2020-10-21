<template>
  <div class="day">
      <h1 class="day-title">
          {{$route.params.date}} <!--router/index.js 에 설정 -->
      </h1>

      <ul class="day-list">
        <li v-for="item in items" :key="item.id" class="day-list-item" :class="{'open':item.open}">

          <div class="time">
            <h2>{{item.id}}</h2>
          </div>

          <div class="action">
            <p v-if="!item.open" @click="toggleOpen(item)">
              {{item.action}}
              <span v-if="item.action.length === 0">내용을 작성해주세요.</span>
            </p>
            <input  v-if="item.open" type="text" v-model="item.action" @keyup.enter="updateItem(item)" placeholder="한 일을 작성해주세요."/>
          </div>

          <day-score @onUpdateScore="onUpdateScore" :item="item"></day-score>

          <div class="note" v-if="item.open">
            <textarea v-model="item.note" placeholder="노트를 작성해 주세요."></textarea>
          </div>

          <div class="buttons" v-if="item.open">
            <button class="save" @click="updateItem(item)">저장</button>
            <button class="cancel" @click="toggleOpen(item)">취소</button>
          </div>

        </li>
      </ul>
  </div>
</template>

<script>
import DayScore from "./DayScore"
import axios from 'axios'
import moment from 'moment'
import { mapGetters } from 'vuex'

export default {
    name : 'Day',
    methods : {
      onUpdateScore(item, score) {
        console.log("Day Comp", score);
        item.score = score;
        this.updateItem(item);
      },
      getItems() {
        //console.log('get items');
      //let url = `https://dailyreport3-8e59c.firebaseio.com/items.json?orderBy="$key"&startAt="2018-04-01"&endAt="2018-04-01-22-24"`;
        let url = `https://dailyreport3-8e59c.firebaseio.com/items.json?orderBy="$key"&startAt="${this.$route.params.date}"&endAt="${this.$route.params.date}-22-24"`;
        axios.get(url).then(
          (res) => {
            this.items = this.displayItems(res.data);
          }
        )
      },
      displayItems(result) {
        // console.log(result); 

        let items = [];
        // let startTime = '08:00';
        let startTime = this.savedSettings.starttime;
        for (let i = 0; i < 12; i++) {
          let datetime = moment(this.$route.params.date + ' ' + startTime);
          // console.log(datetime);
          let itemKey = `${this.$route.params.date}-${datetime.add(i*2,'hours').format('HH')}-00`;
          // console.log(itemKey);
          let item = {
            id: itemKey,
            action: '',
            note: '',
            open: false,
            score: undefined
          }
          Object.keys(result).map((key) => {
            if(key === itemKey) {
              item = result[key];
            }
          });
          items.push(item);
        }//end of for
        return items;
      },
      updateItem(item) {
        // console.log('update', item);
        item.open = false;
        let url = `https://dailyreport3-8e59c.firebaseio.com/items/${item.id}.json`;
        axios.put(url,item).then((res) => {
          console.log(res);
          this.getItems();
        });
      },
      toggleOpen(item) {
        // console.log(item);
        item.open = !item.open; 
      }
    },
    computed : {
      ...mapGetters(['savedSettings'])
    },
    components : {  
      DayScore
    },
    data() {
        return { 
            items : [
                // {
								// 	action : "",
								// 	id : '2018-04-01-08-10',
								// 	note : "",
								// 	open : false,
								// 	score : undefined
                // },
                // {
								// 	action : "",
								// 	id : '2018-04-01-10-12',
								// 	note : "",
								// 	open : false,
								// 	score : undefined
                // },
                // {
								// 	action : "",
								// 	id : '2018-04-01-12-14',
								// 	note : "",
								// 	open : false,
								// 	score : undefined
                // },
            ]
        }
    },
    props : {},
    beforeCreate(){  console.log("====== Day.vue beforeCreate a ========"); },
    created() { console.log("====== Day.vue created aa ========"); this.getItems(); },
    beforeMount(){  console.log("====== Day.vue beforeMount b ========"); },//첫 렌더링이 일어나기 직전
    mounted(){  console.log("====== Day.vue mounted bb ========");  }, //렌더링 후. 컴포넌트, 템플릿에 접근 가능
    beforeUpdate(){  console.log("====== Day.vue beforeUpdate c ========"); },//데이터가 변경되어 다시 렌더링될 때
    updated(){  console.log("====== Day.vue updated cc ========");   },//데이터가 변경되어 렌더링된 이후
    beforeDestroy(){  console.log("====== Day.vue beforeDestroy d ========"); },//소멸되기 전에 호출
    destroyed(){  console.log("====== Day.vue destroyed dd ========"); }//소멸된 후 호출

    // watch : {
    //   '$route' (to, from) {
    //     this.getItems();
    //   }
    // }
}
</script>

<style>

</style>