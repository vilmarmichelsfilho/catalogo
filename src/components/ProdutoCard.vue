<script setup>
import { formataPreco } from '@/utils/produtoUtils';
import ButtonChild from './buttonChild.vue';
import produtoDialog from './produtoDialog.vue';
import { ref } from 'vue';
import { editar } from '@/utils/editar';
 defineProps(['id', 'nome', 'preco', 'imagem', 'categoria']);
 const mostrarDialog = ref(false);
</script>

<template>
    <div class="produto-card">
        <div>
            <h2>{{ nome }}</h2>
            <p>Preço: {{ formataPreco(preco) }}</p>
        </div>
        <div>
            <img :src="imagem" :alt="nome" class="produto-imagem">
        </div>
        <ButtonChild @clique="mostrarDialog=true">Editar</ButtonChild>
        <produtoDialog v-if="mostrarDialog" :nome="nome" :preco="preco" :id="id" :categoria="categoria" :key="id" @fechar="editar(id,preco)" @editar="mostrarDialog=false"</produtoDialog>
    </div>
</template>

<style scoped>
.produto-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;
}

.produto-imagem{
    height: 100px;
    width: 100px;
    object-fit: cover;
    margin: 0 15px;
}


</style>