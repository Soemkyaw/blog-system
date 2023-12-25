<template>
  <nav>
    <h1>VuE BloG</h1>
    <div class="">
        <router-link :to="{name:'home'}">Home</router-link>
        <router-link :to="{name:'Create'}">Create</router-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ddd;
    }
</style>