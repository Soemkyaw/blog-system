<template>
  <Nav></Nav>
  <router-view/>
</template>

<script>
import Nav from './components/Nav'
export default {
  components: { Nav },
    
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0px auto;
  padding: 10px 10px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ddd;
  text-decoration: none;
  margin-right: 20px;
}

nav a.router-link-exact-active {
  /* color: #42b983; */
  color: black;
}
</style>
