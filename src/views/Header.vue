<template>
  <div class="header">
    <h1>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ic-todo-list"></use>
      </svg>
      To Do List
    </h1>
    <Time></Time>
  </div>
</template>

<script>
import Time from '../components/Time.vue'
export default {
  components: {
    Time
  }
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
</style>