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


    <div class="search">
      <input type="text" class="me-3" placeholder="Cerca" v-model.trim="store.filmToSearch">

      <button type="button" class="btn btn-info">Cerca</button>
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