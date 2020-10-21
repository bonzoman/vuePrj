<template>
  <div class="setting">
      <div class="setting-inner">
          <h1>설정</h1>
          <form @submit.prevent="saveSettings">
              <fieldset>
                  <label for="starttime">시작 시간</label>
                  <select id="starttime" v-model="settings.starttime">
										<option value="06:00">06:00</option>
										<option value="08:00">08:00</option>
										<option value="10:00">10:00</option>
                  </select>
              </fieldset>
							<fieldset>
								<label for="lang">달력 언어</label>
								<select id="lang" v-model="settings.lang">
									<option value="ko">한글</option>
									<option value="en">영어</option>
								</select>
							</fieldset>
							<fieldset class="submit">
								<button type="submit" class="save">저장</button>
							</fieldset>
          </form>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapGetters, mapActions} from 'vuex'

export default {
    name : 'Setting',
    methods : {
			...mapActions(['saveSettings']),
			saveSettings() {
        let url = `https://dailyreport3-8e59c.firebaseio.com/settings.json`;
        axios.put(url,this.settings).then((res) => {
					console.log(res);
					//this.saveSettings(this.settings);
          alert('저장이 완료되었습니다.');
        });			
			},
			getSettings() {
				let url = `https://dailyreport3-8e59c.firebaseio.com/settings.json`;
				axios.get(url).then((res) => {
					this.settings = res.data;
				});
				//App 컴포넌트에서 store에 받아왔기 때문에...setting만...
				// this.settings = this.savedSettings;								
			}
		},
    computed : {
      ...mapGetters(['savedSettings'])
		},
    data() {
        return {
					settings : {
						starttime : '08:00',
						lang : 'ko'
					}
				}
    },
    created() {
			this.getSettings();
		}
}
</script>

<style>

</style>