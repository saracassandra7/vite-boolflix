<script>
import {store} from '../data/store'
import AppCard from './AppCard.vue'
import AppLoading from './AppLoading.vue'
export default {
  name: 'AppMain',
  props:{
    title: String,
    type: String
  },
  components:{
    AppCard,
    AppLoading
  },
  data(){
    return{
      store
    }
  },
}
</script>

<template>

<div class="container pt-2 pb-3 text-center" v-if="store.isLoaded">
  <h3>{{title}}</h3>

  <div class="container">
   <div class="row justify-content-evenly">
     <AppCard v-for="card in store[type]" :key="card.id" :card="card" />
   </div>
  </div> 

</div>

<div v-else>
  <AppLoading/>
</div>


</template>

<style lang="scss" scoped>
h3{
  opacity: .5;
}
</style>