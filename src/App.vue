<script setup>
import { ref } from 'vue';
import produtoChild from './components/produtoChild.vue';
import ButtonChild from './components/buttonChild.vue';
import { listaProdutos } from './data/produtos';
const produtos = ref(listaProdutos);

const preco = ref(0);
const posicaoProduto = ref(-1);

function corrigirPreco(idProduto, precoProduto) {
  preco.value = precoProduto;
  posicaoProduto.value = produtos.value.findIndex(p => p.id === idProduto);
}
function salvarPreco() {
  produtos.value[posicaoProduto.value].preco = preco.value
  posicaoProduto.value = -1
}

</script>

<template>
  <div class="container">
    <h1>Catálogo de Produtos</h1>
    <div>
      <ul>
        <produtoChild v-for="produto in produtos" :key="produto.id" :nome="produto.nome" :preco="produto.preco"
          :categoria="produto.categoria" :id="produto.id" @corrigirpreco="corrigirPreco"></produtoChild>
      </ul>
    </div>

    <div v-show="posicaoProduto != -1">
      <label>Preço</label>
      <input type="number" v-model="preco" v-on:keyup.enter="salvarPreco">
      <ButtonChild @clique="salvarPreco">Salvar</ButtonChild>
    </div>
  </div>
</template>

<style scoped></style>