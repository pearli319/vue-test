<template>
  <Article />
  <Aside />
  <Main />
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Article from '@/components/Article.vue'
import Aside from '@/components/Aside.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'Home',
  components: {
    Article,
    Aside,
    Main,
  }
}
</script>
