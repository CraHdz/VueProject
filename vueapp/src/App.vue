<template>
  <div>
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <UserHeader @addEvent="addEvent" />
          <UserList :todos="todos"/>
          <UserFooter :todos="todos" @allClear="allClear" @allComplete="allComplete" @deleteComplete="deleteComplete"/>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import UserHeader from "./components/UserHeader.vue"
import UserFooter from "./components/UserFooter.vue"
import UserList from "./components/UserList.vue"
import {nanoid} from "nanoid"

function todo(event) {
  this.id = nanoid()
  this.event = event
  this.done = false
}


export default {
  name: 'App',
  components: {
    UserHeader,
    UserFooter,
    UserList
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || []
    };
  },
  methods: {
    addEvent(event){
      this.todos.unshift(new todo(event))
    },

    allClear(){
      this.todos.forEach((todo) => {
        todo.done = false
      });
    },

    allComplete(){
      this.todos.forEach((todo) => {
        todo.done = true
      });
    },

    deleteComplete(){
      this.todos = this.todos.filter((todo) => {
          return !todo.done
      });
    }
  }, 
  watch:{
    todos:{
      deep:true,
      handler(){
        localStorage.setItem("todos", JSON.stringify(this.todos))
      }
    }
  },
  mounted() {
    this.$bus.$on("itemCheckChanged", (id)=> {
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          todo.done = !todo.done
        }
      });
    })
  },
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
