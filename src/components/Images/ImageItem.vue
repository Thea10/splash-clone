<template>
  <div
    class="card image-holder"
    v-bind:style="{
      'background-image':
        'linear-gradient(rgb(0 0 0 / 48%) 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%), url(' +
        image.urls.small +
        ')'
    }"
    @click="showImage = true"
    title="Click to view"
  >
    <div class="mask name-text">{{ image.user.name }}</div>
    <div class="mask location-text">{{ image.user.location }}</div>
    <md-dialog :md-active.sync="showImage">
      <i class="material-icons" title="Close" @click="showImage = false">
        close</i
      >
      <div
        class="image-modal"
        v-bind:style="{
          'background-image':
            'linear-gradient(rgb(0 0 0 / 48%) 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%), url(' +
            image.urls.regular +
            ')'
        }"
      >
        <div class="modal-text">
          <div class="name">
            {{ image.user.name }}
          </div>
          <div class="location">
            {{ image.user.location }}
          </div>
        </div>
      </div>
    </md-dialog>
  </div>
</template>
<script>
export default {
  name: "ImageItem",
  props: ["image"],
  data() {
    return {
      showImage: false
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/keyframes.scss";

.image-holder {
  background-size: cover;
  background-repeat: no-repeat;
  cursor: zoom-in;
  .mask {
    color: $background;
    opacity: 0.8;
    text-transform: capitalize;
    &.name-text {
      font-size: 1.1rem;
    }
    &.location-text {
      font-size: 0.7rem;
    }
  }
}
</style>
