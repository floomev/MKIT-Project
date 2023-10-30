<template >
    <div class="borderDiv"></div>
   <div class="cardd11"></div>
   <div class="ratings">
    <div class="year"> <h1>Рейтинг 2023</h1>
      <div class="pictures">
        <div><img src="../pictures/user1.png" alt="user1"></div>
        <div><img src="../pictures/user2.png" alt="user2"></div>
        <div><img src="../pictures/user3.png" alt="user3"></div>
        <div><img src="../pictures/user4.png" alt="user4"></div>
        <div><img src="../pictures/user5.png" alt="user5"></div>
        <div><img src="../pictures/user6.png" alt="user6"></div>
        <div><img src="../pictures/user7.png" alt="user7"></div>
        </div>
    </div>
    <div class="month"> <h1>Рейтинг месяца</h1>
      <div class="pictures1">
        <div><img src="../pictures/user8.png" alt="user8"></div>
      <div><img src="../pictures/user9.png" alt="user9"></div>
      <div><img src="../pictures/user10.png" alt="user10"></div>
      </div>
      
    </div>
   </div>
   <div class="footer"></div>
</template>
<script>
export default {
    data () {
     return {
        
     }
    }
}
    
</script>
<style>
.borderDiv {
    border: 1px solid black;
    height: 0px;
    width: 690px;
    margin-left: 575px;
    margin-top: 30px;
}
  .cardd11 {
    background-image: url(../pictures/TravelTop.png);
   width: 1177px;
    height: 95px;
    margin-top: 50px;
    margin-left: 335px;
    
  }
  .year {
    background-image: url(../pictures/Rectangle38.png);
    width: 592px;
    height: 1014px;
    margin-left: 250px;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .month {
    background-image: url(../pictures/Rectangle39.png);
    width: 592px;
height: 515px;
margin-top: 100px;
margin-left: 200px;
  }
  .ratings {
    display: flex;
  }
  .year h1 {
   position: absolute;
   color: white;
   margin-left: 163px;
   margin-top: 50px;
   font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   font-size: 40px;
  }
  .month h1 {
    position: absolute;
    color: white;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 40px;
    margin-left: 140px;
    margin-top: 43px;
  }
  .pictures {
    margin-top:  130px;
    margin-left: 60px;
  }
  .pictures img {
    margin-top:  15px;
    
  }
  .pictures1 {
    margin-top: 130px;
    margin-left: 60px;
  }
  .pictures1 img{
    margin-top: 15px;
    
  }
</style>