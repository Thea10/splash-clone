<template>
  <div class="cards">
    <ImageItem v-for="image of images" v-bind:key="image.id" :image="image" />
  </div>
</template>

<script>
import ImageItem from "./ImageItem";
export default {
  name: "ImageList",
  components: {
    ImageItem
  },
  props: ["images"]
};
</script>
