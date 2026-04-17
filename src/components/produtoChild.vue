<script setup>
import { formataPreco } from '@/utils/produtoUtils';

defineProps(['nome', 'preco', 'categoria', 'id'])
defineEmits(['corrigirpreco'])

import buttonChild from './buttonChild.vue';
</script>

<template>
    <li>
        {{ nome }} - {{ formataPreco(preco) }} ({{ categoria }})
        <buttonChild @clique="$emit('corrigirpreco', id, preco)">
            Corrigir Preço
        </buttonChild>
    </li>
</template>

<style scoped>
</style>