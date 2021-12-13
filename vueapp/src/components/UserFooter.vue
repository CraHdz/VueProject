<template>
   <div class="todo-footer" v-show="todos.length">
      <label>
         <input type="checkbox" v-model="isChecked"/>
      </label>
      <span>
         <span>已完成{{completeEvents}}</span> / 全部{{numEvents}}
      </span>
      <button class="btn btn-danger" @click="deleteComplete">清除已完成任务</button>
   </div>
</template>

<script>
export default {
   name: "UserFooter",
   computed:{
      numEvents(){
         return this.todos.length
      },
      completeEvents(){
         if (this.todos.length == 0) {
            return 0
         } 
         return this.todos.reduce((num, todo) => {
            console.log(num + "-" + todo.done)
            return num + (todo.done ? 1 : 0)
         },0) 
      },
      isChecked:{
         get(){
            return this.numEvents === this.completeEvents && this.numEvents >  0
         },
         set(value){
            if (!this.isChecked) {
               this.$emit("allComplete")
            }
            else {
               this.$emit("allClear")
            }
         }
      }
   },
   methods: {
      deleteComplete(){
         this.$emit("deleteComplete")
      },
   },
   props:["todos"]
}
</script>

<style>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>