<script setup>
import { formataPreco } from '@/utils/produtoUtils';
import buttonChild from './buttonChild.vue';
import { ref } from 'vue';
import { listaProdutos } from '@/data/produtos';
import ButtonChild from './buttonChild.vue';

const props = defineProps(['id','nome','preco','categoria'])
const emits = defineEmits(['fechar','editar'])



</script>

<template>
    <div class="overlay">
        <div class="produto-dialogue">
            <h2>{{ props.nome }}</h2>
            <h3>ID: {{ props.id }}</h3>
            <p>Preço: <input type="number" :value="preco"></p>
            <p>Categoria: {{ props.categoria }}</p>
            <ButtonChild v-on:clique="$emit('editar', id, preco)">Corrigir Preço</ButtonChild>
            <ButtonChild v-on:clique="$emit('fechar')">Fechar</ButtonChild>
        </div>
    </div>
</template>

<style scoped>
.produto-dialogue {
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 24px;
    min-width: 320px;
}
.overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}
</style>