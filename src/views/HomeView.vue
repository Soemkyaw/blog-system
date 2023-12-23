<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length>0" >
      <PostList :posts="posts"></PostList>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostList from '../components/PostList'
import getPosts from "../composable/getPosts"

export default {
  components: {
    Spinner, PostList },
  setup() {
    let { posts, error, load } = getPosts()

    load()
    return { posts, error};
  }
}
</script>

<style>
  /* .home{
    max-width: 1200px;
    margin: 0px auto;
    padding: 10px 10px;
  } */
</style>
