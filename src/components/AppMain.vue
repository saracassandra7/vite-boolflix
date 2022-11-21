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

<AppCard v-for="(movie, index) in store.moviesListData" :key="index"
:movie= "movie" />

</template>

<style lang="scss" scoped>

</style>