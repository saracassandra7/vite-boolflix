<script>
import {store} from '../data/store'

export default {
  name: 'AppMain',

  data(){
    return{
      store
    }
  },

  props:{
    movie: Object
  }

}
</script>

<template>
  <!-- <ul>
    <li v-for="movie in store.moviesListData"
    :key="movie.id">{{movie.title}}</li>

  </ul> -->

  <h1>main</h1>
</template>

<style>

</style>