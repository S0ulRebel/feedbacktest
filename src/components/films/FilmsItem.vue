<template>

  <div class="filmsItem shadow">

    <div class="filmsItem__episode">Episode: {{film.episode_id}}</div>

    <h1 class="filmsItem__title">{{film.title}}</h1>

    <div class="filmsItem__body row">

      <div
        class="filmsItem__thumbnail">
        <img :src="require(`@/assets/images/films/${film.episode_id}.jpg`)">
      </div>

      <div class="filmsItem__description">{{film.opening_crawl.substring(0, 400) + '...'}}</div>

    </div>

    <div class="filmsItem__meta row">

      <div>
        <div>Directed by:</div>
        {{film.director}}
      </div>

      <div>
        <div>Produced by:</div>
        {{film.producer}}
      </div>

      <div>
        <div>Release Date:</div>
        {{film.release_date | formatDate}}
      </div>

    </div>

    <router-link
      class="button"
      :to="{path: '/films/' + film.getIdFromURL()}">More Details</router-link>

  </div>

</template>

<script>

export default {
  name: 'Film',
  props: {
    film: {
      type: Object,
    },
  },
};
</script>

<style scoped>

</style>
