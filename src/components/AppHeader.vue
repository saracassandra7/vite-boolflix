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
  <div class="my-container mt-3 mb-2">
    <div class="logo">
      <img src="/logo-boolflix.png" alt="logo">
    </div>


    <div class="search d-flex">
      <input 
      @keyup.enter="$emit('search')"
      type="text" class="me-3" placeholder="Cerca" v-model.trim="store.filmToSearch">

      <select 
      v-model="store.type"
      @change="$emit('search')"
      class="form-select">
       <option value="">Tutti</option>
       <option value="movie">Film</option>
       <option value="tv">Serie TV</option>
      </select>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.my-container{
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .logo{
    width: 10vw;

    img{
      max-width: 100%;
    }
  }
}

</style>