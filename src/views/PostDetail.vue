<template>
  <div class="detail">
    <h1>Detail</h1>
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
            <button class="delete" @click="deletePost">Delete</button>
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
import { useRouter } from "vue-router"
import { db } from "../firebase/config"
export default {
  components: { Spinner },
    props: ['id'],
  setup(props) {
        let router = useRouter()
        let { post, err, load } = getSinglePost(props.id)

      load();
      let deletePost = async() => {
        await db.collection("posts").doc(props.id).delete();
        router.push({ name: "home" })
      }

        return {post,err,deletePost}
    }
}
</script>

<style>
  .delete{
    display: block;
    margin: 20px auto;
  }
</style>