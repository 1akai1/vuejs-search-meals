<script setup>
import YouTubeButton from '../components/YouTubeButton.vue'
const { meal } = defineProps({
	meal: Object,
})
</script>

<template>
	<div class="bg-white shadow rounded-xl">
		<router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
			<img
				class="rounded-t-xl w-full h-48 object-cover"
				:src="meal.strMealThumb"
				:alt="meal.strMeal" />
		</router-link>
		<div class="p-8">
			<h3 class="font-semibold">{{ meal.strMeal }}</h3>
			<p class="mb-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium
				doloribus architecto dolores enim nam, ut porro cumque dolorem sequi amet rem
				possimus ipsa aspernatur in totam at. Repudiandae, quis!
			</p>
			<div class="flex items-center justify-between">
				<YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
