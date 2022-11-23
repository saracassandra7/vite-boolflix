<script>
export default {
  name: 'AppCard',

  props:{
    card: Object
  },

}
</script>

<template>

<div class="sc-container d-flex mb-3">
  <div class="card">
  
    <div class="card-body">
      <h4>Titolo: {{card.title || card.name}}</h4>
      <h4>Titolo Originale: {{card.original_title || card.original_name}}</h4>
      <img v-if="card.poster_path == null" src="../assets/img/placeholder.png" class="placeholder">
      <img v-else :src="'https://image.tmdb.org/t/p/w185/' + card.poster_path" :alt="card.title || card.name">
      
      <!-- <img
      :src="'https://image.tmdb.org/t/p/w185/' + card.poster_path"
      :alt="card.title || card.name"/> -->
      <h4>Lingua: 
        <span v-if="card.original_language" :class="'fi fi-' + card.original_language"></span>
        <span v-if="card.original_language === 'en'" :class="'fi fi-gb' "></span>
        <span v-else>{{ card.original_language }}</span>
      </h4>
      <h4>Voto: 
        <p v-for="(star, index) in Math.ceil(card.vote_average / 2)" :key="index">
          <i class="fa-solid fa-star"></i>
        </p>
        <p v-for="(star, index) in Math.floor(5 - card.vote_average / 2)" :key="index">
          <i class="fa-regular fa-star"></i>
        </p>
        
      </h4>
    </div>
  </div>

</div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;

.sc-container{
  width: calc(100% / 4 - 10px );

  .card{
    background-color: $back-col;
    border: 1px solid gainsboro;

    img.placeholder{
      width: 185px;
      height: 278px;
      object-fit: cover;
    }

  }

  p{
    display: inline-block;

    i{
      font-size: 1.3rem;
    }
  }
}

</style>