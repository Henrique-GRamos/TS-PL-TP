import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`\nNome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);

            //telefones

            console.log(`Telefones: `)
            if (cliente.getTelefones.length === 0) {
                console.log(`Não possui telefones cadastrados`)
            }
            cliente.getTelefones.forEach(telefone => {
                console.log(`ddd:` + telefone.getDdd)
                console.log(`numero:` + telefone.getNumero)
            })

            //Rgs

            console.log(`\nRgs do cliente:`);

            if (cliente.getRgs.length === 0) {
                console.log(`\nNão possui rgs cadastrados`)
            }
            cliente.getRgs.forEach(rg => {
                console.log(`\n Rg: ` + rg.getValor);
            });

            //pets

            console.log(`\nPets do cliente:`);

            if (cliente.getPets.length === 0) {
                console.log(`\nNão possui pets cadastrados`)
            }
            cliente.getPets.forEach(pet => {
                console.log(`\n Id do pet: ` + pet.getId)
                console.log(` Nome: ` + pet.getNome);
                console.log(` Tipo: ` + pet.getTipo);
                console.log(` Raça: ` + pet.getRaca);
                console.log(` Sexo: ` + pet.getSexo);
            });

            //produtos

            console.log(`\nProdutos consumidos do cliente:`);

            if (cliente.getProdutosConsumidos.length === 0) {
                console.log(`\nNão consumiu produtos`)
            }
            cliente.getProdutosConsumidos.forEach(produto => {
                console.log(`\n Nome: ` + produto.nome)
                console.log(` Preço: ` + produto.preco);
            });

            //servicos

            console.log(`\nServiços consumidos do cliente:`);

            if (cliente.getServicosConsumidos.length === 0) {
                console.log(`\nNão consumiu produtos`)
            }
            cliente.getServicosConsumidos.forEach(servico => {
                console.log(`\n Nome: ` + servico.nome)
                console.log(` Preço: ` + servico.preco);
            });

            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
