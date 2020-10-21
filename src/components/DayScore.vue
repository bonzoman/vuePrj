<template>
  <div class="score">
      <!--
      <button @click="updateScore(3)">GOOD</button>
      <button @click="updateScore(2)">SOSO</button>
      <button @click="updateScore(1)">BAD</button>
      -->
      <button v-for="button in buttons" 
              v-bind:key="button.score" 
              @click="updateScore(button.score)"
              v-bind:class="{'active':button.score === item.score}">{{button.label}}</button>
  </div>
</template>

<script>
export default {
    name : 'DayScore',
    methods : {
        updateScore(score) {
            //console.log(score);
            //console.log(this.item);
            //부모component에 값 전달
            this.$emit('onUpdateScore',this.item, score);
        }
    },
    computed : {},
    data() {
        return {
            buttons : [
                {label:'GOOD', score:3},
                {label:'SOSO', score:2},
                {label:'BAD' , score:1}                
            ]
        }
    },
    props : [
        'item'
    ]
}
</script>

<style>

</style>