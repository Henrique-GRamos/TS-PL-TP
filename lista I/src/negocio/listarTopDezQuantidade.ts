import Cliente from "../modelo/cliente";


export default class ListarTopQuantidade {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }

    public listarTopQuantidade(): Array<{ cliente: Cliente, quantidadeTotal: number }> {
        return this.clientes.map(cliente => {
            const quantidadeTotal = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
            return { cliente, quantidadeTotal }
        }).sort((a, b) => b.quantidadeTotal - a.quantidadeTotal)
            .slice(0, 10)
    }

}