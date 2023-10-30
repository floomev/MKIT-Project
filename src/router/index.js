import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import FinderView from '../views/FindView.vue'
import QuestionsView from "../views/QuestionsView.vue"
 import PoemView from '../views/PoemView.vue'
 import FindercopyView from '../views/FindcopyView.vue'
 import MaincopyView from '../views/MaincopyView.vue'
 import PoemcopyView from '../views/PoemcopyView.vue'
const router = createRouter ({
   
    routes: [ {
        path: '/main',
        component: MainView,
        name: 'MainPage'

    },
    {
        path: '/finder',
        component: FinderView,
        name: 'Find'


    },
    {
        path: '/questions',
        component: QuestionsView,
        name: 'Questions'


    },
    {
        path: '/poem',
        component: PoemView,
        name: 'poem'


    },
    {
        path: '/findercopy',
        component: FindercopyView,
        name: 'Findcopy'


    },
    {
        path: '/maincopy',
        component: MaincopyView,
        name: 'MaincopyPage'

    },
    {
        path: '/poemcopy',
        component: PoemcopyView,
        name: 'poemcopy'


    },

    ] ,
    history: createWebHistory(),
})
export default router