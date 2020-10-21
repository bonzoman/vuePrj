<template>
  <nav class="nav">
      <ul class="nav-list">
          <li>
              <button @click="today">
                  <i class="xi-home"></i>
                  <span>오늘</span>
              </button>
          </li>
      </ul>

      <ul class="nav-list">
          <li>
              <router-link to="/calendar">
                  <i class="xi-calendar"></i>
                  <span>달력</span>
              </router-link>
          </li>
      </ul>

      <ul class="nav-list">
          <li>
              <router-link to="/setting">
                  <i class="xi-cog"></i>
                  <span>설정</span>
              </router-link>
          </li>
      </ul>

      <ul class="nav-list">
          <li>
              <router-link to="/about">
                  <i class="xi-emoticon-smiley"></i>
                  <span>소개</span>
              </router-link>
          </li>
      </ul>

  </nav>
</template>

<script>
import moment from 'moment' //npm i moment --save

export default {
    name : 'Nav',
    methods : {
			today() {
				let todayUrl = '/day/' + moment(new Date()).format('YYYY-MM-DD');
				// console.log(todayUrl);//    /day/2020-10-21
                this.$router.push(todayUrl);
                //동일 page 호출시 처리
                // .catch(error => {
                    //if(error.name === "NavigationDuplicated") {
                        //location.reload();
                    //}
                // });
			}
		},
    computed : {},
    data() {
        return {}
    },
    props : {}
}
</script>

<style>

</style>