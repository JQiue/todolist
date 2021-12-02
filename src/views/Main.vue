<template>
  <div class="main">
    <Card :titlename="dodo"></Card>
    <Card :titlename="done"></Card>
    <Card :titlename="memo"></Card>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  data() {
    return {
      dodo: "do",
      done: "done",
      memo: "memo",
    };
  },
  components: {
    Card,
  },
};
</script>

<style>
.main {
  flex: 1;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
}
</style>