<script setup>
import MealItem from './MealItem.vue'

const {meals} = defineProps({
  meals: {
    required: true,
    type: Object
  }
})
</script>

<template>
	<div v-if="meals.length" class="grid md:grid-cols-3 grid-cols-1 p-8 gap-5 max-w-[1100px] m-auto">
		<MealItem
			v-for="meal of meals"
			:key="meal.idMeal"
			:meal="meal"/>
	</div>
	<div v-else class="flex justify-center text-gray-600 mt-10">
		There are no meals
	</div>
</template>

<style scoped>

</style>