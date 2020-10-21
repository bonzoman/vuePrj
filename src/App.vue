<template>
  <div id="app">
    <div id="nav">
<!--  <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <Nav></Nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import axios from 'axios'
import {mapGetters, mapActions} from 'vuex'; 

export default {
  components : {
    Nav
  },
  methods:{
    ...mapActions(['saveSettings']),
    init() {
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxx " + this.savedSettings.starttime);
      if(typeof this.savedSettings.starttime == 'undefined') {
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxx 2222");
        this.getSettings();
      }
    },
    getSettings() {
      let url = `https://dailyreport3-8e59c.firebaseio.com/settings.json`;
        axios.get(url).then(
          (res) => {
            this.saveSettings(res.data);
          }
        )         
    }
  },
  created() {
    console.log("============== App created() =========");
    this.init();
  },
  computed: {
    ...mapGetters(['savedSettings'])
  }
}
</script>

<style lang="scss" src="./assets/css/style.scss">
</style>
