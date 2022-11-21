<script>
import {store} from '../data/store'

export default {
  name: 'AppHeader',

  data(){
    return{
      store
    }
  }



}
</script>

<template>
  <div class="container mt-3">
    <input type="text" class="me-3" placeholder="Cerca" v-model="store.filmToSearch">

    <button type="button" class="btn btn-info"
    @click="$emit('searchMovie')">Cerca</button>
  </div>
</template>

<style>

</style>