<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/variables.scss";

body {
  margin: 0;
  font-family: "Roboto", sans-serif;

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 100px;
    margin: auto;
    width: 65%;

    .card {
      border-radius: 5px;
      padding: 0.9rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      grid-row-end: span 4;
      margin: 1rem;

      .mask {
        margin-bottom: 0.5rem;
      }
    }

    @include md-min {
      margin-top: -3rem;

      .card {
        grid-row-end: span 3;
        &:nth-child(2n + 0) {
          grid-row-end: span 4;
        }
      }
    }
  }
  .md-dialog {
    align-items: unset;
    justify-content: unset;
    .md-dialog-container {
      background: transparent;
      box-shadow: none;
      align-items: flex-end;
      max-height: 100vh;
      height: 90vh;
      min-width: 80vw;
      margin: 1rem auto;

      i {
        color: $background;
        float: right;
        cursor: pointer;
      }
      .image-modal {
        height: 100%;
        width: 80%;
        margin: auto;
        background: $background;
        overflow: hidden;
        box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
          0 24px 38px 3px rgba(0, 0, 0, 0.14),
          0 9px 46px 8px rgba(0, 0, 0, 0.12);

        border-radius: 10px;

        .img {
          height: 80%;
          width: 100%;
          margin: auto;
          border-radius: 10px 10px 0 0;

          img {
            border-radius: 10px 10px 0 0;
            height: 100%;
            width: 100%;
          }
        }
        .modal-text {
          padding: 2rem;
          height: 20%;
          border-radius: 0 0 10px 10px;

          .name,
          .location {
            margin-bottom: 0.7rem;
          }

          .name {
            color: $primaryText;
            font-size: 1.3rem;
            font-weight: bold;
          }

          .location {
            color: $searchText;
          }
        }

        @include md-min {
          width: 60%;
        }
      }
    }
  }
}
</style>
