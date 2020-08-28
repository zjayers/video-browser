<template>

  <ul v-if="videos.length" class="list-group col-md-4">
    <VideoListItem v-for="video in videos"
                   :key="video.etag"
                   v-on="$listeners"
                   :video="video"
    />
  </ul>

</template>

<script>
import VideoListItem from "@/components/VideoListItem";

export default {
  name: "VideoList",
  components: {VideoListItem},
  props: {
    videos: Array
  }
}
</script>

<style scoped>
div {
  text-align: center;
}
</style>
