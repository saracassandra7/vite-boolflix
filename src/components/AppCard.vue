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
  <div class="sc-card m-3">
    <!-- copertina -->
    <img v-if="card.poster_path == null" src="../assets/img/placeholder.png" class="placeholder">
    <img v-else :src="'https://image.tmdb.org/t/p/w342/' + card.poster_path" :alt="card.title || card.name">

    <div class="info">
      <!-- titolo -->
      <h4>Titolo: {{card.title || card.name}}</h4>
      <h4>Titolo Originale: {{card.original_title || card.original_name}}</h4>

      
      <h4>Lingua: 
        <span v-if="card.original_language" :class="'fi fi-' + card.original_language"></span>
        <span v-if="card.original_language === 'en'" :class="'fi fi-gb' "></span>
        <span>{{ card.original_language }}</span>
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
  width: calc(100% / 4 - 5px);

  .sc-card {
  cursor: pointer;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5); }
  .sc-card:hover {
    transform: translateY(20px); }
    .sc-card:hover:before {
      opacity: 1; }
    .sc-card:hover .info {
      opacity: 1;
      transform: translateY(0px); }
  .sc-card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    z-index: 2;
    transition: 0.5s;
    opacity: 0; }
  .sc-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
   }
  .sc-card .info {
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s; }

    img.placeholder{
      
      object-fit: cover;
    }

   p{
    display: inline-block;

     i{
       font-size: 1.3rem;
      }
    }
}

</style>