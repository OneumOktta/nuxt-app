<script setup lang="ts">
interface Props {
	modelValue: boolean
	label?: string
	required?: boolean
}

defineProps<Props>()
defineEmits<{
	'update:modelValue': [value: boolean]
}>()
</script>

<template>
	<label class="flex items-start gap-3 cursor-pointer select-none">
		<input
			:checked="modelValue"
			type="checkbox"
			class="w-5 h-5 border-2 border-light-text/10 dark:border-dark-text/10 rounded accent-lightBlue transition-colors cursor-pointer"
			:required="required"
			style="margin-top: 4px"
			@change="
				$emit('update:modelValue', ($event.target as HTMLInputElement).checked)
			"
		/>
		<span class="text-lg text-light-text/60 dark:text-dark-text/60">
			<slot>
				{{ label }}
			</slot>
		</span>
	</label>
</template>
