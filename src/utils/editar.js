import { listaProdutos } from "@/data/produtos";
import { ref } from "vue";

function editar(id, preco) {
    const lista = ref(listaProdutos);
    const posicao = lista.value.findIndex(item <= item.id === id);
    lista.value[posicao].preco == preco;
}

export { editar }