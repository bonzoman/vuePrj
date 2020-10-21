<template>
  <div class="calendar">
      <full-calendar :config="config" @day-click="dayClick"></full-calendar>
  </div>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar';
import 'fullcalendar/dist/fullcalendar.css';
import { mapGetters } from 'vuex'

export default {
    name : 'Calendar',
    components : {
        FullCalendar
    },
    methods : {
        dayClick(date) {
            // console.log(date);
            let url = `/day/${date.format('YYYY-MM-DD')}`;
            console.log(url);
            this.$router.push(url);
        },
        applySettings() {
          this.config['locale'] = this.savedSettings.lang;

        }
    },
    computed : {
        ...mapGetters(['savedSettings'])
    },
    data() {
        return {
            config : {
                defaultView: 'month',
                header : {
                    left : 'prev', center : 'title', right : 'today,next'
                },
                height : 500,
                // locale: this.savedSettings.lang
            }
        }
    },
    props : {},
    created() {
      this.applySettings();
    }
}
</script>

<style>

</style>