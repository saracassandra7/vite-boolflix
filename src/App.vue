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

    getApi(type, isPopular = false){
      let apiUrl;
      if(isPopular) apiUrl = 'https://api.themoviedb.org/3/movie/popular/'
      else apiUrl = store.apiUrl + type

      store.isLoaded = false
      axios.get(apiUrl, 
      {params:{
      api_key: store.apiKey,
      query: store.filmToSearch,
      }
      })
      .then(result =>{
        store[type] = result.data.results
        console.log(result.data.results);
        store.isLoaded = true
      })
      .catch(error=>{
        console.log(error);
      })
    },

    startSearch(){
      store.movie = [];
      store.tv =[];
      if(store.type=== ''){
        this.getApi('movie')
        this.getApi('tv')
      } else{
        this.getApi(store.type)
      }
    }

  },

  mounted(){
    this.getApi('movie', true)
  }
}
</script>

<template>
<AppHeader @search="startSearch" />
<AppMain v-show="store.movie.length > 0" title="Movies" type="movie"/>
<AppMain v-show="store.tv.length > 0" title="TV Series" type="tv" />
<AppMain v-show="store.movie.length <= 0 && store.tv.length <= 0" title="No results found" />
  
</template>

<style lang="scss">
@use './styles/general';

</style>