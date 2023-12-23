<template>
  <div class="spin"></div>
</template>

<script>
export default {

}
</script>

<style>
    .spin{
        width: 50px;
        height: 50px;
        border: 5px solid transparent;
        margin: 150px auto;
        border-radius: 50%;
        border-top-color: blue;
        animation: spinner 0.5s infinite;
    }
    @keyframes spinner {
        to{transform: rotate(360deg);}
    }
</style>