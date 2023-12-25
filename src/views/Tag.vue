<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-if="posts.length" class="layout">
    <div>
      <PostList :posts="filteredPost"></PostList>
    </div>
    <div>
      <TagCloud :posts="posts"></TagCloud>
    </div>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostList from '../components/PostList'
import getPosts from '@/composable/getPosts'
import { computed } from 'vue'
export default {
    props: ['tag'],
  components: {
    TagCloud, PostList },
    setup(props) {
        let { posts, error, load } = getPosts()

        let filteredPost = computed(() => {
            return posts.value.filter((post) => {
                return post.tags.includes(props.tag)
            })
        })
        load()
        return {posts,error,filteredPost}
    }
}
</script>

<style>

</style>