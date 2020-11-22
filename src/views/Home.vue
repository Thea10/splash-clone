<template>
  <div>
    <Search
      :initialLoading="initialLoading"
      :searchingPhotos="searchingPhotos"
      :retrievedPhotos="retrievedPhotos"
      :errorMessage="errorMessage"
      @searchImages="imageSearch"
      @reload="reloadPage"
    />
    <PictureSearch v-if="initialLoading || searchingPhotos" />
    <ImageList v-else :images="loadImages" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Search from "@/components/Search/Search";
import PictureSearch from "@/components/Search/PictureSearch";
import ImageList from "@/components/Images/ImageList";
export default {
  name: "Home",
  data() {
    return {
      initialLoading: false,
      searchingPhotos: false,
      retrievedPhotos: false,
      errorMessage: ""
    };
  },
  components: {
    Search,
    PictureSearch,
    ImageList
  },

  computed: {
    ...mapGetters({ loadImages: "getImages" })
  },

  methods: {
    ...mapActions({
      getImages: "GET_IMAGES",
      searchImages: "SEARCH_IMAGES"
    }),
    handleError(err) {
      err.message == "Network Error"
        ? (this.errorMessage = err.message)
        : (this.errorMessage = err.response.data.errors[0]);
    },

    async imageSearch(text) {
      this.searchingPhotos = true;
      if (!text) {
        this.searchingPhotos = false;
        this.errorMessage = "Please enter a search term";

        setTimeout(() => {
          this.errorMessage = "";
        }, 3000);
        return;
      }
      await this.searchImages(text).then(
        () => {
          this.searchingPhotos = false;
          this.retrievedPhotos = true;
        },
        err => {
          this.handleError(err);
        }
      );
    },

    reloadPage() {
      window.location.reload();
    }
  },
  async mounted() {
    this.initialLoading = true;
    await this.getImages().then(
      () => {
        this.initialLoading = false;
      },
      err => {
        this.handleError(err);
      }
    );
  }
};
</script>
