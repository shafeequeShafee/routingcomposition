<template>
  <h4>About you</h4>
  <p>
    It is all about you ,i KNOW EVERYTHING ABOUT YOU. BUT YOU KNOW ONE THING...
    i AM ALLWAYS THIK ABOUT YOU
  </p>
</template>
    
    <script>
import { onBeforeRouteLeave } from "vue-router";
export default {
  setup() {
    onBeforeRouteLeave(() => {
      const answer = window.confirm("Are you sure you want to leave ?");
      if (!answer) {
        return false;
      }
    });
  },
};
</script>
    
    <style>
</style>