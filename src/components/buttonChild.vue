<script setup>
defineEmits(['clique'])
</script>

<template>
    <button v-on:click.prevent="$emit('clique')">
        <slot>
            <label>Preço</label>
            
        </slot>
    </button>
</template>

<style scoped>
</style>