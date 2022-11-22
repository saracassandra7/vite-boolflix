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
      })
      .catch(error=>{
        console.log(error);
        
      })
    },

    mounted(){
      this.getApi('movie')
      this.getApi('tv')
    }
  },

}
</script>

<template>
<AppHeader />
<AppMain title="Film" type="movie"/>
<AppMain title="Serie TV" type="tv" />
  
</template>

<style lang="scss">
@use './styles/general';

</style>