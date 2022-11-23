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
<header>
  <div class="my-container pt-3 pb-3">
    <div class="logo">
      <img src="/logo-boolflix.png" alt="logo">
    </div>

    <div class="search d-flex">
      <input 
      @keyup.enter="$emit('search')"
      type="text" class="me-3" placeholder="Search" v-model.trim="store.filmToSearch">

      <select 
      v-model="store.type"
      @change="$emit('search')"
      class="form-select">
       <option value="">All</option>
       <option value="movie">Movies</option>
       <option value="tv">TV Series</option>
      </select>
    </div>
    
  </div>
</header>

</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
header{

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

    select{
      background-color: $back-col;
      color: $text-col;
    }
  }
}

</style>