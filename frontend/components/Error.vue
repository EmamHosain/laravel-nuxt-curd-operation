<script setup>
defineProps({
    errorMessage: {
        type: String,
        default: '',
    }
})
</script>

<template>
    <div v-if="errorMessage" class="  text-red-700">
        <p>{{ errorMessage }}</p>
    </div>
</template>
