<template>
  <div v-if="video" class="col-md-8">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe :src="videoURL" class="embed-responsive-item"/>
    </div>
    <div class="details">
      <h4>
        {{ videoTitle }}
      </h4>
      <p>
        {{ videoDescription }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: {
    video: Object
  },
  computed: {
    videoTitle() {
      return this.video.snippet.title
    },
    videoDescription() {
      return this.video.snippet.description
    },
    videoURL() {
      const {videoId} = this.video.id;
      return `https://www.youtube.com/embed/${videoId}`
    }
  }
}
</script>

<style scoped>
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
