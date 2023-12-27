<template>
  <h1>Tag Cloud</h1>
  <div v-for="tag in uniqueTag" :key="tag" class="uniqueTag">
    <router-link :to="{ name: 'Tag', params: { tag } }">{{ tag }}</router-link>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["posts"],
  setup(props) {
    let tags = ref([]);
    props.posts.forEach((post) => {
      post.tags.forEach((tag) => {
        tags.value.push(tag);
      });
    });

    let uniqueTag = tags.value.filter((tag, index, array) => {
      return array.indexOf(tag) === index;
    });
    return { tags, uniqueTag };
  },
};
</script>

<style scoped>

h3{
    margin: 0px;
    padding: 18.72px 0px;
    border-bottom: 2px solid #ddd;
}
.uniqueTag {
  display: inline-block;
  margin: 10px 10px 10px 0;
  padding: 10px;
  color: rgba(225, 225, 225, 0.75);
  /* color: black; */
  border-radius: 10px;
  cursor: pointer;
}
 a{
    color: #999;
 }
</style>
