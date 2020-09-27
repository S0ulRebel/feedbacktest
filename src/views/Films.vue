<template>

  <div class="content">

    <search v-model="searchTerm"></search>

    <div class="filmsList">

      <template v-if="!films.length">
        <div class="noResults">No results to show</div>
      </template>

      <template v-for="film in films">
        <films-item
          :key="film.episode_id"
          :film="film"/>
      </template>

    </div>

  </div>

</template>

<script>
// @ is an alias to /src
import FilmsItem from '../components/films/FilmsItem.vue';
import Film from '../classes/Film';
import Search from '../components/shared/Search.vue';

export default {
  name: 'Home',
  components: {
    Search,
    FilmsItem,
  },
  data() {
    return {
      searchTerm: '',
      films: [],
    };
  },
  watch: {
    searchTerm() {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.dispatch('films/fetchAll', { term: this.searchTerm }).then((response) => {
        this.films = response.data.results.map((film) => new Film(film));
      });
    },
  },
};
</script>
