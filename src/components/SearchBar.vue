<template>
  <div>
    <input id="search-bar" name="searchbar" type="text" @input="handleInputChange"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    handleInputChange(e) {
      this.$emit('searchBarChange', e.target.value)
    }
  }
}
</script>

<style scoped>
input {
  width: 75%;
}

div {
  text-align: center;
  margin: 20px;
}
</style>
