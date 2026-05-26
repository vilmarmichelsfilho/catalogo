<script setup>
import { ref } from 'vue';
import { listaProdutos } from '@/data/produtos';
import { formataPreco } from '@/utils/produtoUtils';
import ProdutoCard from '@/components/ProdutoCard.vue';
const produtos = ref(listaProdutos);
produtos.value = produtos.value.filter(i => i.categoria === 'Brinquedos')
</script>

<template>
    <div class="container">
        <h1>Brinquedos</h1>
        <div class="produtos">
            <ProdutoCard v-for="p in produtos" :key="p.id" :nome="p.nome" :categoria="p.categoria" :preco="p.preco" :imagem="p.imagem" :id="p.id"></ProdutoCard>
        </div>
    </div>
</template>

<style scoped>
</style>