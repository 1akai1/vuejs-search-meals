<script setup>
import { computed, onMounted, ref } from 'vue'
import axiosClient from '../axiosClient'

const keyword = ref('')
const ingredients = ref([])
const computedIngredients = computed(() => {
	if (!computedIngredients) return ingredients
	return ingredients.value.filter(i =>
		i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
	)
})
onMounted(() => {
	axiosClient.get('list.php?i=list').then(({ data }) => {
		// debugger
		ingredients.value = data.meals
	})
})
</script>

<template>
	<div class="p-8">
		<h1 class="text-4xl font-bold mb-4">Ingredients</h1>
		<input
			v-model="keyword"
			@change="searchMeals"
			type="text"
			class="w-full bg-white border-0 rounded mb-3 shadow"
			placeholder="Search for Ingredient" />
		<router-link
			:to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
			v-for="ingredient of computedIngredients"
			:key="ingredient.idIngredient"
			class="block bg-white rounded p-3 mb-3 shadow">
			<h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
			<p>{{ ingredient.strDescription }}</p>
		</router-link>
	</div>
</template>

<style scoped></style>
