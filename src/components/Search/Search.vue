<template>
  <div class="search-holder d-flex">
    <h2 v-if="initialLoading">Loading Images</h2>
    <h2 class="d-flex" v-else-if="searchingPhotos">
      <i class="material-icons" title="Back" @click="$emit('reload')">
        keyboard_backspace</i
      >

      Searching For <span>"{{ searchText }}" </span>
    </h2>
    <h2 class="d-flex" v-else-if="retrievedPhotos">
      <i class="material-icons" title="Back" @click="$emit('reload')">
        keyboard_backspace</i
      >
      Search Results for <span> "{{ searchText }}" </span>
    </h2>

    <h3 v-if="errorMessage">{{ errorMessage }}</h3>

    <div
      v-if="!initialLoading && !retrievedPhotos && !searchingPhotos"
      class="search-box d-flex"
    >
      <i class="material-icons">search</i>

      <input
        type="text"
        placeholder="Search for photo"
        v-model="searchText"
        @keyup.enter="$emit('searchImages', searchText)"
        title="Press enter to search"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: [
    "initialLoading",
    "searchingPhotos",
    "retrievedPhotos",
    "errorMessage"
  ],
  data() {
    return {
      searchText: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.d-flex {
  display: flex;
  align-items: center;
}
.search-holder {
  background: $headerBg;
  height: 35vh;
  padding: 1rem;
  justify-content: center;
  flex-direction: column;

  h2,
  h3 {
    color: $primaryText;
    margin-bottom: 3rem;
    span {
      color: $searchText;
      text-transform: capitalize;
      margin-left: 1rem;
    }
  }
  i {
    cursor: pointer;
  }

  .search-box {
    justify-content: space-between;
    padding: 1rem;
    background: $background;
    box-shadow: 0 12.5px 10px $searchShadow;
    min-width: 75%;
    border-radius: 5px;
    transition: all 0.4s ease-in-out;
    margin-bottom: 1rem;

    i {
      font-size: 18px;
    }

    ::placeholder {
      font-weight: 600;
    }

    ::placeholder,
    i {
      color: $primaryText;
    }

    input {
      outline: none;
      box-shadow: none;
      border: none;
      width: 95%;
    }

    &:hover,
    &:focus {
      box-shadow: 0 5px 5px $searchShadow;
    }
  }

  @include md-min {
    h2 {
      font-size: 2.5rem;
    }
    h2,
    h3 {
      width: 75%;
    }
  }
}
</style>
