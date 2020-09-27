<template>
  <div id="app">
    <navigation/>
    <router-view/>
  </div>
</template>
<script>
import Navigation from './components/shared/Navigation.vue';

export default {
  components: { Navigation },
};
</script>
