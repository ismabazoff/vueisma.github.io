<template>
    <div>
        <router-link to="/polls/params">Параметры</router-link> |
        <router-link to="/polls/questions">Вопросы</router-link> |
        <router-link to="/polls/logic">Логика</router-link> |
        <router-link to="/polls/conditions">Условия</router-link> |
        <router-link to="/polls/respondents">Респонденты</router-link>
        <!-- <pre>{{$route.params}}</pre> -->
        <router-view/>
    </div>
</template>


<script>
import Params from '@/views/polls/Params.vue'

export default{
    created(){
        console.log(this);
        
    }
}
</script>
