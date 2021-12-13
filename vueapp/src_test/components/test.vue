<template>
  <div>
      <li>学生姓名：{{name}}</li>
      <li>学生年龄：{{age}}</li>
      <li>学生信息：{{studentInfo}}</li>
      <li>班主任：{{teacher}}</li>
      <li>学校：{{school}}</li>
      <button @click="showInfo">点我增加学生的年龄</button>
      <hr>
      <button @click="changeSchool">点我改变学校</button>
  </div>
</template>

<script>
export default {
    name: "test",
    data(){
        return {
            name: "huangdezhou",
            age:18,
            school:"铃兰高中"
        }
    },
    computed:{
        studentInfo(){
            console.log("student info is computed")
            this.school = "铃兰高中"
            this.name = this.school + "test"
            return this.name + "-" + this.age 
        }  
    },
    methods: {
        showInfo(){
            console.log("showInfo")
            this.age++
        },
        changeSchool(){
            this.school = "名山中学"
        }
    },
    watch:{
        age:{
            handler(){
                
            }
        },
        school:{
            handler(){
                
            }
        }
    },
    props:{
        teacher:String,
    }
}
</script>

<style>

</style>