<template>

  <div
    id="filmDetails"
    class="content shadow">

    <template v-if="film && characters.length">

      <div class="filmsDetails__episode">Episode: {{film.episode_id}}</div>

      <h1 class="filmsItem__title">{{film.title}}</h1>

      <div class="filmDetails__header">

        <div
          class="filmsDetails__thumbnail">
          <img :src="require(`@/assets/images/films/${film.episode_id}.jpg`)">
        </div>

        <div class="filmsDetails__text">

          <div class="filmsDetails__description">{{film.opening_crawl}}</div>

          <div class="filmsDetails__meta">

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

        </div>

      </div>

      <h2>Characters</h2>

      <div class="filmDetails__characterList">
        <template v-for="character in characters">
          <characters-item
            :character="character"
            :key="character.url"/>
        </template>
      </div>
    </template>
  </div>
</template>

<script>

import CharactersItem from '../components/characters/CharactersItem.vue';
import Character from '../classes/Character';

export default {
  name: 'FilmDetails',
  components: { CharactersItem },
  data() {
    return {
      film: null,
      characters: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const { id } = this.$route.params;
      this.$store.dispatch('films/fetchOne', { id }).then((response) => {
        this.film = response.data;
      }).then(() => {
        this.$store.dispatch('people/fetchAll').then((response) => {
          this.characters = response.data.results
            .filter((el) => this.film.characters.indexOf(el.url))
            .map((el) => new Character(el));
        });
      });
    },
  },
};
</script>

<style scoped>

</style>
