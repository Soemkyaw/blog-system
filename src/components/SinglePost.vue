<template>
  <router-link :to="{name:'Detail',params:{id:post.id}}">
    <h3 class="title">{{ post.title }}</h3>
  </router-link>
  <p class="post-body">{{ post.body }}</p>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style>
  .title{
    display: inline-block;
    position: relative;
    color: rgb((42), 36, 36);
    /* font-size: 16px; */
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: black;
  }
  .title::before{
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(225, 225, 225, 0.75);
    position: absolute;
    z-index: -1;
    border-radius: 10px 0 10px 0;
    padding-right: 50px;
    left: -30px;
    transform: rotateZ(-5deg);
  }
</style>