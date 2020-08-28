<template>
  <li class="list-group-item media" @click="handleVideoItemSelected">
    <img :src="videoThumbnail" alt="Video Thumbnail" class='mr-3'>
    <div class="media-body">{{ videoTitle }}</div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object
  },
  computed: {
    videoThumbnail() {
      return this.video.snippet.thumbnails.default.url
    },
    videoTitle() {
      return this.video.snippet.title
    },
  },
  methods: {
    handleVideoItemSelected() {
      this.$emit('videoItemSelected', this.video)
    }
  }
}
</script>

<style scoped>
li {
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
}

li:hover {
  background: #eee;
}
</style>
