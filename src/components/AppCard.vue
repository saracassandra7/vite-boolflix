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
      <h4>Lingua: 
        <span v-if="card.original_language" :class="'fi fi-' + card.original_language"></span>
        <span v-if="card.original_language === 'en'" :class="'fi fi-gb' "></span>
        <span v-else>{{ card.original_language }}</span>
      </h4>
      <h4>Voto: {{card.vote_average}}</h4>
    </div>
  </div>

</div>

</template>

<style lang="scss" scoped>

.sc-container{
  width: calc(100% / 4 - 10px );
}

</style>