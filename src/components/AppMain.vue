<script>
import {store} from '../data/store'
import AppCard from './AppCard.vue'

export default {
  name: 'AppMain',

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
<div>
  <ul v-for="(movie, index) in store.moviesListData" :key="index">
    <li>{{movie.title}}</li>

  </ul>

</div>
<AppCard/>
</template>

<style lang="scss" scoped>

</style>