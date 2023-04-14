<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router'
import MealItem from '../components/MealItem.vue'
import Meals from '../components/Meals.vue'

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
	store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
	keyword.value = route.params.name
	if (keyword.value) {
		searchMeals()
	}
	else
		store.commit('setSearchedMeals', [])
})
</script>

<template>
	<div class="p-8 pb-0">
		<input
			v-model="keyword"
			@change="searchMeals"
			type="text"
			class="w-full bg-white border-2 border-gray-200 rounded"
			placeholder="Search for Meals" />
	</div>

	<Meals :meals="meals"/>
</template>

<style scoped></style>
