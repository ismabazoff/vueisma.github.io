import Vue from 'vue'
import VueRouter from 'vue-router'
import Polls from '../views/Polls.vue'
import Users from '../views/Users.vue'
import Blacklists from '../views/Blacklists.vue'
import CallCenter from '../views/CallCenter.vue'
import Params from '../views/polls/Params.vue'
import Questions from '../views/polls/Questions.vue'
import Logic from '../views/polls/Logic.vue'
import Conditions from '../views/polls/Conditions.vue'
import Respondents from '../views/polls/Respondents.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/polls',
    meta:{
      title: 'Опросы',
      add: 'Добавить опрос'
    },
    component: Polls,
    children : [
      {
        path: 'params',
        meta:{
          title: 'Параметры'
        },
        component: Params
      },
      {
        path: 'questions',
        meta:{
          title: 'Добавить вопрос'
        },
        component: Questions
      },
      {
        path: 'logic',
        meta:{
          title: 'Логика'
        },
        component: Logic
      },
      {
        path: 'conditions',
        meta:{
          title: 'Добавить условие'
        },
        component: Conditions
      },
      {
        path: 'respondents',
        meta:{
          title: 'Добавить опрос'
        },
        component: Respondents
      }
    ]
  },
  // {
  //   path: '/polls/:component',
  //   component: Polls
  // },
  // {
  //   path: '/polls/params',
  //   component: Polls
  // },
  {
    path: '/users',
    meta:{
      title: 'Пользователи'
    },
    component: Users
  },
  {
    path: '/blacklists',
    meta:{
      title: 'Черные списки'
    },
    component: Blacklists
  },
  {
    path: '/callcenter',
    meta:{
      title: 'Колл-Центр'
    },
    component: CallCenter
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
