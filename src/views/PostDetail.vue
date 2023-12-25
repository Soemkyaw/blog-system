<template>
  <div class="detail">
    <h1>Detail {{ id }}</h1>
    <div v-if="post">
        <div v-if="err">
          {{ err }}
        </div>
        <div>
          <h3 class="title">{{ post.title }}</h3>
          <p class="post-body">{{ post.body }}</p>
          <!-- {{ post }} -->
          <div class="pill" v-for="tag in post.tags" :key="tag">
            <router-link :to="{name:'Tag',params:{tag:tag}}">{{ tag }}</router-link>
          </div>
          
        </div>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getSinglePost from '../composable/getSinglePost'
export default {
  components: { Spinner },
    props: ['id'],
    setup(props) {
        let { post, err, load } = getSinglePost(props.id)

        load();

        return {post,err}
    }
}
</script>

<style>
  
</style>