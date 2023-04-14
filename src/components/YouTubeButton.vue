<script setup>
const props = defineProps({
  href: String
})
</script>

<template>
		<a
			class="px-3 py-2 rounded border-2 text-white border-red-500 bg-red-500 hover:bg-red-600 hover:border-red-600 transition-colors"
			:href="href"
			target="_blank">
			<slot></slot>
		</a>
</template>

<style scoped></style>
