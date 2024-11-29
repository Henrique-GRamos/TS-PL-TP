import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class RegistrarProdutoServico {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.produtos = produtos;
        this.servicos = servicos;
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public registra(cpf: string): void {
        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
        if (cliente) {
            let execucao = true

            while (execucao) {
                console.log(`\nDeseja registrar consumo ao cliente ${cliente.nome}:`);
                console.log(`1 - Registrar consumo de produto`);
                console.log(`2 - Registrar consumo de serviço`);
                console.log(`0 - Voltar`);

                let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);

                //produto

                switch (opcao) {
                    case 1:
                        console.log(`\nLista de todos os produtos:`);
                        this.produtos.forEach(produto => {
                            console.log(`Nome: ` + produto.nome);
                            console.log(`Valor: ` + produto.preco);
                            console.log(`--------------------------------------`);
                        });

                        const escolheProduto: string = this.entrada.receberTexto(`Digite o nome do produto que deseja consumir: `);
                        const produtoEscolhido = this.produtos.find(produto => produto.nome === escolheProduto);

                        if (produtoEscolhido) {
                            cliente.getProdutosConsumidos.push(produtoEscolhido);
                            console.log(`Consumo registrado `)
                        } else {
                            console.log(`Produto não encontrado`)
                            break;
                        }
                        break

                    case 2:
                        console.log(`\nLista de todos os serviços:`);
                        this.servicos.forEach(servico => {
                            console.log(`Nome: ` + servico.nome);
                            console.log(`Valor: ` + servico.preco);
                            console.log(`--------------------------------------`);
                        });

                        const escolheServico: string = this.entrada.receberTexto(`Digite o nome do produto que deseja consumir: `);
                        const servicoEscolhido = this.servicos.find(servico => servico.nome === escolheServico);

                        if (servicoEscolhido) {
                            cliente.getServicosConsumidos.push(servicoEscolhido);
                            console.log(`Consumo registrado `)
                        } else {
                            console.log(`Serviço não encontrado`)
                            break;
                        }
                        break

                    case 0:
                        execucao = false;
                        break;

                    default:
                        console.log(`Opção inválida.`);
                        break;
                }
            }

        } else {
            console.log(`Cliente não encontrado.`);
        }
    }
}