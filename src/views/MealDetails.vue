<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient'
import YouTubeButton from '../components/YouTubeButton.vue'

const route = useRoute()
const meal = ref({})

onMounted(() => {
	axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
		// debugger
		meal.value = data.meals[0] || {}
	})
})
</script>

<template>
	<div class="max-w-[800px] mx-auto p-8">
		<!-- <pre>{{ meal }}</pre> -->
		<h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
		<img
      class="max-w-full"
			:src="meal.strMealThumb"
			:alt="meal.strMeal" />
		<div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
			<div><strong class="font-bold">Category:</strong> {{ meal.strCategory }}</div>
			<div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
			<div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
		</div>
    <div class="my-3">
      {{ meal.strInstructions }}
    </div>
		<div class="grid grid-cols-1 sm:grid-cols-2">
			<div>
				<h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
				<ul>
					<template v-for="i of 20">
						<li v-if="meal[`strIngredient${i}`]">
							{{ i }}. {{ meal[`strIngredient${i}`] }}
						</li>
					</template>
				</ul>
			</div>
			<div>
				<h2 class="text-2xl font-semibold mb-3">Measures</h2>
				<ul>
					<template v-for="i of 20">
						<li v-if="meal[`strMeasure${i}`]">{{ i }}. {{ meal[`strMeasure${i}`] }}</li>
					</template>
				</ul>
			</div>
			<div class="flex gap-2 mt-4">
				<YouTubeButton :href="meal.strYoutube">Go to YouTube</YouTubeButton>
				<a
					class="px-3 py-2 rounded border-2 border-transparent text-indigo-600"
					:href="meal.strSource"
					target="_blank"
					>View Original Source
				</a>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

<!-- 1:38:53 -->
