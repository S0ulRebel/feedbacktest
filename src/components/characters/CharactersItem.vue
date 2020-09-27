<template>

  <div
    class="characterItem"
    :key="character.url">

    <div
      class="characterItem__thumbnail">
      <img :src="require(`@/assets/images/people/${character.getIdFromURL()}.jpg`)">
    </div>

    <div class="characterItem__info">
      <h3>{{character.name}}</h3>
      <div><span>Gender:</span> {{character.gender}}</div>
      <div><span>Birth Year:</span> {{character.birth_year}}</div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'CharactersItem',
  props: {
    character: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
