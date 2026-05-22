<script setup>
import { ref } from 'vue';
import { listaProdutos } from '@/data/produtos';
import { formataPreco } from '@/utils/produtoUtils';
const produtos = ref(listaProdutos);
produtos.value = produtos.value.filter(i => i.categoria === 'Acessórios')
</script>

<template>
    <div class="container">
        <h1>Alimentos</h1>
        <div class="produtos">
            <div class="produtos-card" :key="p.id" v-for="p in produtos">
                <h2>{{ p.nome }}</h2>
                <img :src="p.imagem" :alt="p.nome" class="produto-imagem">
                <p>Preço: {{ formataPreco(p.preco) }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>