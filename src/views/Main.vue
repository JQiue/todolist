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
  created() {
    this.$store.state.items = JSON.parse(localStorage.getItem('todolist')).items;
    console.log(this.$store.state.items);
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