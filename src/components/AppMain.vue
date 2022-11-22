<script>
import {store} from '../data/store'
import AppCard from './AppCard.vue'

export default {
  name: 'AppMain',

  props:{
    title: String,
    type: String
  },

  components:{
    AppCard
  },

  data(){
    return{
      store
    }
  },

}
</script>

<template>

<div class="container">
  <h1>{{title}}</h1>

</div>
<div class="container">
  <div class="row">
    <AppCard v-for="card in store[type]" :key="card.id" :card="card" />
  </div>
</div>

</template>

<style lang="scss" scoped>

</style>