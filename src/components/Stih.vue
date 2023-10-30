<template>
 
  <div class="main_containers">
   <div class="two_cont">
  <div class="container1">
 <span class="spanch" v-if="progress === 0">Каким курортом является Шерегеш?</span>
 <select   v-if="progress === 0" @change="selectCategory1($event)" class="form-control">
   <option  v-if="progress === 0" value="2">Самым солнечным</option>
   
   <option  v-if="progress === 0" value="1">Самым снежным</option>
   <option  v-if="progress === 0" value="3">Самым дождливым</option>
   
 </select>
 

</div>
 
  <br/>
  <div class="container1">
 <span class="spanch"  v-if="progress === 1">Самое популярное занятие в шерегеше?</span>
 <select  v-if="progress === 1" @change="selectCategory2($event)" class="form-control">
   
   <option v-if="progress === 1" value="1">Спортивные игры</option>
   <option v-if="progress === 1" value="2">Плавание и дайвинг</option>
   <option v-if="progress === 1" value="3">Горные лыжи и сноубординг</option>
   
 </select>
  
   </div>
 
 
 <div class="buttonsss"> <button v-if="progress === 0" @click="progress = 1">Далее</button>
 <button v-if="progress === 1 || progress === 0" @click="showProgress">Результаты</button>
 <button v-if="progress === 1" @click="progress = 2">Далее</button> 
 </div>
</div>
<div class="results">
 <div v-if="change === true">Вы выполнили: {{myProgress}} из 2 заданий</div>
 <div v-if="progress === 2" >Выполнено правильно {{ counter }} из 2 заданий</div>
</div>
</div>
</template>

<script>
export default {
data() {
 return {
  counter: 0,
  valu: '',
  progress: 0,
  myProgress: 0,
  change: false,
  proc: 0,
 }
},
name: 'App',
methods: {
 selectCategory1(event) {;
   this.valu = event.target.value
   if (this.valu === '1') {
     this.counter += 1
   } else {
     this.counter = this.counter
   }
   console.log(this.counter);
 },
 selectCategory2(event) {;
   this.valu = event.target.value
   if (this.valu === '3') {
     this.counter += 1
   } else {
     this.counter = this.counter
   }
   console.log(this.counter);
 },
 showProgress() {
   this.myProgress = this.progress
   this.progress ++
   this.change = true

 },
 results () {
   if (this.counter === 1) {
     this.proc = "50%"
   } else if (this.counter === 0){
       
       this.proc = "0%"
     
   } else if (this.counter === 2){
       
       this.proc = "100%"
     
   } 
 }
}
}
</script>
<style>
.form-control{
width: 600px;
height: 100px;
border: 0px;
background-color: rgba(250, 250, 205, 0.829);
border-radius: 30px;
text-align: center;
font-size: 20px;
}
.container1 {
display: flex;
flex-direction: column;
align-items: center;
}
.buttonsss {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
}
.buttonsss button{
border: 0px;
margin: 80px;
width: 200px;
height: 100px;
border-radius: 20px;
}
.main_containers {

background-color: rgba(0, 0, 0, 0.89);
height: 810px;
border-radius: 100px;
display: flex;
justify-content: center;
align-items: center;
}
.spanch {
color: white;
font-size: 40px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.results {
color: white;
font-size: 40px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>