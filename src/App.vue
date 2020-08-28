<template>
  <div class="container">
    <SearchBar @searchBarChange="handleSearchBarChange"/>
    <div class="row">
      <VideoList :videos="videos" @videoItemSelected="handleVideoItemSelected"/>
      <VideoDetail :video="selectedVideo"/>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import VideoList from "@/components/VideoList";
import {searchYoutubeApi} from "@/services/searchYoutubeApi";
import VideoDetail from "@/components/VideoDetail";

export default {
  name: 'App',
  components: {VideoDetail, VideoList, SearchBar},
  methods: {
    async handleSearchBarChange(value) {
      const res = await searchYoutubeApi(value);
      this.videos = res.data.items;
    },
    handleVideoItemSelected(video) {
      this.selectedVideo = video;
    }
  },
  data() {
    return {videos: [], selectedVideo: null};
  }
}
</script>

<style scoped>

</style>

