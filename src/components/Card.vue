<template>
  <div class="card">
    <div class="card-head">
      <h2>{{ titlename }}</h2>
      <div class="add-box">
        <input
          class="add"
          v-model="content"
          @keyup.enter="add"
          v-if="titlename === 'do' || titlename === 'memo'"
        />
        <select v-if="titlename == 'do' || titlename =='memo'" name="level" class="level" v-model="level">
          <option value="high">高</option>
          <option value="medium">中</option>
          <option value="low">低</option>
        </select>
      </div>
      <!-- <button class="menu">...</button> -->
    </div>
    <div class="card-body">
      <ul class="">
        <template v-for="(item, index) in items">
          <li v-if="item.type === titlename" :key="item.id" :class="item.level">
            <span
              class="content"
              :data-id="item.id"
              contenteditable="true"
              @blur="edit(item.id)"
              ref="content"
              >{{ item.content }}</span
            >
            <div class="edit">
              <button v-if="titlename === 'do'" @click="complete(item.id)">
                完成
              </button>
              <button v-else-if="titlename === 'memo'" @click="revoke(item.id)">
                do
              </button>
              <button v-else @click="revoke(item.id)">撤销</button>
              <button @click="deleteItem(item.id)">删除</button>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["titlename"],
  data() {
    return {
      colors: {
        high: "high",
        medium: "medium",
        low: "low",
      },
      items: this.$store.state.items,
      content: "",
      level: 'high',
      current: null,
    };
  },
  created() {},
  methods: {
    add() {
      this.current = {
        id: Date.now(),
        content: this.content,
        type: this.titlename,
        level: this.level,
      };
      if (this.content == "") return;
      this.$store.commit("push", this.current);
      this.content = "";
      this.items = this.$store.state.items;
    },
    complete(id) {
      this.$store.commit("complete", id);
    },
    edit(id) {
      this.$refs.content.forEach((element, index) => {
        if (element.dataset.id == id) {
          this.$store.commit("edit", {
            id,
            content: this.$refs.content[index].textContent,
          });
        }
      });
    },
    revoke(id) {
      this.$store.commit("revoke", id);
    },
    deleteItem(id) {
      console.log(id);
      this.$store.commit("delete", id);
      this.items = this.$store.state.items;
    },
    memoToDo(id) {
      this.$store.commit("revoke", id);
    },
  },
  directives: {
    debounce: {
      bind: (el, data) => {
        console.log(el, data.expression);
        el.addEventListener("keyup", () => {
          console.log(1234);
        });
      },
    },
  },
};
</script>

<style>
.card {
  min-width: 330px;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 10px 40px;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.35);
}

.card-head {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #000;
}

.card-body {
  flex: 1;
  margin-top: 20px;
  overflow: auto;
}

.card-body::-webkit-scrollbar {
  width: 0px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2em;
}

.card-body ul {
  list-style: none;
}

.card-body ul li {
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 0 1em;
  list-style: none;
  height: 55px;
  border-radius: 10px;
  transition: all 0.15s;
}

.content {
  flex: 1;
  width: 100px;
  height: 24px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  text-indent: 1em;
}

ul li:hover {
  opacity: 0.8;
}

ul li:hover button {
  opacity: 1;
}

.card-body button {
  opacity: 0;
}

.add-box {
  flex: 1;
  margin-bottom: 4px;
  text-align: center;
}

.add {
  display: inline-block;
  width: 50%;
  height: 100%;
  border: none;
  outline: none;
  background-color: #efeef4;
  text-indent: 1em;
  border-radius: 4px;
  transition: all 0.4s;
}

.add:focus {
  width: 80%;
  background-color: white;
  border-color: #000;
  border: 1px solid #000;
}

.edit {
  position: absolute;
  right: 10px;
}

.edit button {
  color: #0099cc;
  background: transparent;
  border: 1px solid #0099cc;
  border-radius: 6px;
  border: none;
  color: white;
  padding: 4px 9px;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  background-color: white;
  color: black;
  border: 1px solid #008cba;
}

.edit button:hover {
  background-color: #008cba;
  color: white;
}

.level {
  border: none;
  outline: none;
}

.high {
  background-color: #ffdcdc;
}
.medium {
  background-color: #fed4c6;
}
.low {
  background-color: #fce6c4;
}
</style>