<script setup>
import { ref } from 'vue';
</script>

<template>
    <section>
        <h1>Catálogo de Produtos</h1>

        <h2>
            Bem-vindo ao catálogo de produtos.
        </h2>

        <p>Use o menu superior para visualizar os produtos categoria: <br> Acessorios, Alimentos, Brinquedos e Higiene.</p>
    </section>
</template>

<style scoped>
section {
    text-align: center;
    padding: 24px;
}
h1 {
    margin-bottom: 8px;
}
p {
    margin-top: 16px;
}
</style>