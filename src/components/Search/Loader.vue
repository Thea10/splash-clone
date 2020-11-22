<template>
  <div class="card placeholder-loader">
    <div class="mask name-text"></div>
    <div class="mask location-text"></div>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/keyframes.scss";

.placeholder-loader {
  background: $loaderBg;
  .mask {
    padding: 0.5rem;
    animation: shimmerLoader 1s linear infinite forwards;
    transition: all 0.8s;
    background: #f6f7f8;
    background: linear-gradient(
      to right,
      $loaderMaskBg 10%,
      $loaderMaskBg 20%,
      $loaderMaskBg-2 30%
    );
    background-size: 500px;

    &.name-text {
      width: 45%;
    }
    &.location-text {
      width: 20%;
      max-width: 50%;
    }
  }
}
</style>
