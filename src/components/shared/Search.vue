<template>

  <div class="search-wrapper">

    <unicon
      name="search"
      fill="royalblue"
      :height="20"
      :width="20"/>

    <input
      type="text"
      placeholder="Search Movies"
      :value="value"
      @input="updateSearchTerm">

  </div>

</template>

<script>
export default {
  name: 'Search',
  props: ['value'],
  data() {
    return {
      timeout: null,
    };
  },
  methods: {
    // Debounce - emits the input event once the user stops typing for 500ms
    updateSearchTerm(e) {
      if (this.timeout) {
        window.clearTimeout(this.timeout);
      }
      this.timeout = window.setTimeout(() => {
        this.$emit('input', e.target.value);
      }, 500);
    },
  },
};
</script>

<style scoped lang="sass">
  .search-wrapper
    max-width: 320px
    margin: auto
    width: 100%
    position: relative

    .unicon
      position: absolute
      top: 5px
      right: 5px

    input
      padding-right: 30px
      width: 100%
</style>
