<script setup lang="ts">
interface Props {
	id: string
	modelValue: string
	type?: string
	placeholder?: string
	label: string
	required?: boolean
	icon?: string
}

const props = defineProps<Props>()
defineEmits<{
	'update:modelValue': [value: string]
}>()
</script>

<template>
	<div class="relative">
		<label :for="id" class="sr-only">{{ label }}</label>
		<div class="relative">
			<div
				v-if="icon"
				class="absolute left-4 top-0 bottom-0 flex items-center text-light-text/40 dark:text-dark-text/40"
			>
				<Icon :name="icon" class="w-5 h-5" />
			</div>
			<input
				:id="id"
				:type="type || 'text'"
				:value="modelValue"
				:placeholder="placeholder || label"
				:required="required"
				:class="[
					'w-full bg-transparent border-2 border-light-text/10 dark:border-dark-text/10 rounded-xl',
					'focus:border-lightPink dark:focus:border-lightPink',
					'outline-none transition-colors',
					icon ? 'pl-12 pr-4' : 'px-4',
					'py-3',
				]"
				@input="
					$emit('update:modelValue', ($event.target as HTMLInputElement).value)
				"
			/>
		</div>
	</div>
</template>
