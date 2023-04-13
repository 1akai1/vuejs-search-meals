<script setup>
import { computed, ref } from 'vue'
import store from '../store'

const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
	store.dispatch('searchMeals', keyword.value)
}
</script>

<template>
	<div class="p-8">
		<input
			v-model="keyword"
			@change="searchMeals"
			type="text"
			class="w-full border-2 border-gray-200 rounded"
			placeholder="Search for Meals" />
	</div>

	<div>
		<pre>{{ meals }}</pre>
	</div>
</template>

<style scoped></style>
