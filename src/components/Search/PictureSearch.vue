<template>
  <div class="searching">
    <div class="cards">
      <Loader v-for="loader of loaders" v-bind:key="loader" />
    </div>
  </div>
</template>

<script>
import Loader from "./Loader";
export default {
  name: "PictureSearch",
  components: {
    Loader
  },

  data() {
    return {
      loaders: 6
    };
  }
};
</script>
