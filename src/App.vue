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

    .card {
      border-radius: 5px;
      padding: 0.9rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      grid-row-end: span 5;
      margin: 1rem;

      .mask {
        margin-bottom: 0.5rem;
      }
    }

    @include md-min {
      margin-top: -3rem;
      width: 80%;
    }

    @include lg-min {
      width: 65%;
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
        overflow: hidden;
        box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
          0 24px 38px 3px rgba(0, 0, 0, 0.14),
          0 9px 46px 8px rgba(0, 0, 0, 0.12);

        border-radius: 10px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        align-items: flex-end;

        .modal-text {
          padding: 2rem;
          height: 20%;
          background: $background;
          width: 100%;

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
