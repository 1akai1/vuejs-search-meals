<script setup>
import { ref, computed, onMounted } from 'vue'
import Meals from '../components/Meals.vue'
import store from '../store'

const meals = computed(() => store.state.random)

onMounted(async () => {
	store.dispatch('random')
})
</script>

<template>
	<Meals :meals="meals"/>
</template>

<style scoped></style>
