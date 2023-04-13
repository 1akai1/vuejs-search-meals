<script setup>

</script>

<template>
	<header
		class="
		  flex
		  items-stretch
		  justify-between
		  h-16
		  bg-white
		  shadow">
		<router-link
			class="
			  inline-flex
			  items-center
			  h-full
			  px-4"
			:to="{ name: 'home' }">
			Home
		</router-link>
		<nav class="
		  flex
		  items-center
		  gap-1">
			<router-link
				:to="{ name: 'byName' }"
				class="
				  inline-flex
				  items-center
				  h-full
				  px-2
				  transition-colors
				  hover:bg-purple-100">
				Search Meals
			</router-link>
			<router-link
				:to="{ name: 'byLetter' }"
				class="
				  inline-flex
				  items-center
				  h-full
				  px-2
				  transition-colors
				  hover:bg-purple-100">
				Meals By Letter
			</router-link>
			<router-link
				:to="{ name: 'byIngredient' }"
				class="
				  inline-flex
				  items-center
				  h-full
				  px-2
				  transition-colors
				  hover:bg-purple-100">
				Meals By Ingredients
			</router-link>
		</nav>
	</header>
</template>

<style scoped></style>
