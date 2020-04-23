<template>
  <div id="app">
    <div class="left">
      <router-link to="/polls">Опросы</router-link>
      <router-link to="/users">Пользователи</router-link>
      <router-link to="/blacklists">Черные списки</router-link>
      <router-link to="/callcenter">Колл-центр</router-link>
    </div>
    <div class="right">
      <div class="header">
        <input type="text" name="" id="">
        <div class="administrator">
          <a>Александр</a>
          <a>Администратор</a>
        </div>
      </div>
      <div class="navlink">
        <span class='link' v-for='item in $route.matched'>{{item.meta.title}}</span>
      </div>
      <router-view/>
    </div>
  </div>
</template>


<script>

  export default{
    data(){
      return{
        // items:[
        //         {
        //             titleOne: this.$route.matched[0].meta.title
        //         },
        //         {
        //             titleTwo: this.$route.matched[1].meta.title
        //         }
        // ]
      }
    }
  }

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content:center;
  margin: 10px;
}

.left{
  display: flex;
  flex-direction: column;
  outline:1px solid black;
  padding:10px;
}

.right{
  padding:10px;
  width: 600px;
}



.header{
  display: flex;
  margin-bottom:20px;
}

.header input{
  width:300px;
}

.administrator{
  margin-left:160px;
  display: flex;
  flex-direction: column;
}
.administrator a:first-child{
  font-weight: bold;
}

.link:not(:first-child):before{
  content:' => ';
}

.navlink{
  display: flex;
  justify-content: left;
  margin-bottom:20px;
}
</style>
