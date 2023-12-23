<template>
  <div class="">
    <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"></SinglePost>
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props: ["posts"]
}
</script>

<style>

</style>