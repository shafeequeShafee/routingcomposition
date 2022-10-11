<template>
  <h3>Welcome Home</h3>
  <p>Hi sfq, This is sfq, this is my kingdom....Do you who i am ... One day I wil Become the best Software Developer</p>
  <button @click="redirect">Redirect</button>
</template>

<script>
  import { useRouter, useRoute } from 'vue-router'

export default {
  setup(){
    const router = useRouter()
    const route =useRoute()
    const redirect =()=>{
      const redirectpath = route.query.redirect || '/about'
      router.push(redirectpath)  
 
    }
    return{
      redirect
    }

  }

}
</script>

<style>

</style>