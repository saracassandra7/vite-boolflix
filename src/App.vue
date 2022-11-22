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
    getApi(type){
      axios.get(store.apiUrl + type, 
      {params:{
      api_key: store.apiKey,
      query: store.filmToSearch
      }
      })
      .then(result =>{
        store[type] = result.data.results
        console.log(result.data.results);
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

}
</script>

<template>
<AppHeader @search="startSearch" />
<AppMain v-if="store.movie.length > 0" title="Film" type="movie"/>
<AppMain v-if="store.tv.length > 0" title="Serie TV" type="tv" />
  
</template>

<style lang="scss">
@use './styles/general';

</style>