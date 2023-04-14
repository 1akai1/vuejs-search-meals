<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import Meals from '../components/Meals.vue'
import store from '../store'
import { useRoute } from 'vue-router'

const meals = computed(() => store.state.random)
const route = useRoute()
watch(route, () => {
	store.commit('clearRandom')
	for (const i of Array.from({length:10})){
		store.dispatch('random')
	}
})
onMounted(async () => {
	for (const i of Array.from({length:10})){
		store.dispatch('random')
	}
})
</script>

<template>
	<Meals :meals="meals"/>
</template>

<style scoped></style>
