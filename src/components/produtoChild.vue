<script setup>
defineProps(['nome', 'preco', 'categoria', 'id'])
defineEmits(['corrigir'])
</script>

<template>
    <li>
        {{ nome }} - RS${{ preco }} ({{ categoria }})
    </li>
</template>

<style scoped>
</style>