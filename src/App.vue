<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import axios from 'axios'
import {store} from './data/store'

export default {
  name: 'App',

  components:{
    AppHeader, 
    AppMain,
  },

  data(){
    return{
      store
    }
  },

  methods:{
    getMovies(){
      axios.get(store.apiUrlMovie,{
        params:{
          api_key: store.apiKey,
          query: store.filmToSearch
        }
      })
      .then(result =>{
        store.moviesListData = result.data.results
      })
      .catch(error=>{
        console.log(error);
        
      })
    },

  },

}
</script>

<template>
<AppHeader @searchMovie="getMovies()" />
<AppMain/>
  
</template>

<style lang="scss">
@use './styles/general';

</style>