import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealListVue from '../views/MealList.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/letter/:letter',
		name: 'byLetter',
		component: MealListVue,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
