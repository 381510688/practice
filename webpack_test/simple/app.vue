<template>
    <div>
        <p class="red">{{message}}</p>
        <!--<img src="bannerSrc">-->
    </div>
</template>

<script>
//    import Banner from './images/1.jpg'
    export default {
      name: 'App',
      data() {
        return {
          message: 'this is my first simple webpack demo'
//          bannerSrc: Banner
        }
      }
    }
</script>

<style>
    .red {
        color: red
    }
</style>