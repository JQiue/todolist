<template>
  <div class="time">
    {{year}}-{{month}}-{{date}}
    {{day | dayFormat}}
    {{hour | fill0}}:{{minute | fill0}}:{{second | fill0}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      time: 0,
      year: 0,
      month: 0,
      date: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    }
  },
  methods: {
    formatDate(){
      const date = new Date(Date.now());
      this.year = date.getFullYear();
      this.month = date.getMonth() + 1;
      this.date = date.getDate();
      this.day = date.getDay();
      this.hour = date.getHours();
      this.minute = date.getMinutes();
      this.second = date.getSeconds();
    }
  },
  filters: {
    dayFormat(value) {
      const days = ['星期一', '星期二','星期三','星期四','星期五','星期六','星期日'];
      return days[value - 1];
    },
    fill0(value) {
      if(value < 10 ){
        return '0' + value;
      }
      return value;
    }
  },
  created(){
    setInterval(() => {
      this.formatDate();
    }, 1000);
  }
}
</script>

<style>

</style>