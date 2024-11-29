import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemCliente";
import AtualizaCliente from "../negocio/atualizaCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemProdutos from "../negocio/listagemProduto";
import ListagemServicos from "../negocio/listagemServico";
import CadastroServico from "../negocio/cadastroServico";
import atualizarProdutoServico from "../negocio/atualizarProdutoServico";
import ListarTopQuantidade from "../negocio/listarTopDezQuantidade";
import RegistrarProdutoServico from "../negocio/registrarProdutoServico";
console.log(`Seja bem vino ao pet lovers, onde cuidar do seu pet é o nosso prazer`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente `);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar ou deletar dados do cliente (Nome, nome soocial, telefones, pets ou Rgs)`);
    console.log(`4 - cadastrar produto`);
    console.log(`5 - cadastrar servico`);
    console.log(`6 - listar produto`);
    console.log(`7 - listar servico`);
    console.log(`8 - Atualizar ou deletar produtos ou serviços`);
    console.log(`9 - Registrar consumo de produto/serviço`);
    console.log(`10 - Top 10 clientes que mais consumiram em quantidade`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let puxaCpf = entrada.receberTexto(`Por favor, digite o número do cpf do cliente que deseja atualizar/deletar: `)
            let atualizarCliente = new AtualizaCliente(empresa.getClientes)
            atualizarCliente.atualiza(puxaCpf)
            break
        case 4:
            let cadastradoProduto = new CadastroProduto(empresa.getProdutos)
            cadastradoProduto.cadastrar()
            break;
        case 5:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 6:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 7:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break;
        case 8:
            let atualizarPS = new atualizarProdutoServico(empresa.getProdutos, empresa.getServicos)
            atualizarPS.atualiza()
            break;
        case 9:
            let getCpf = entrada.receberTexto(`Por favor, digite o número do cpf do cliente que deseja registrar os serviços: `)
            let registrarProdutoServico = new RegistrarProdutoServico(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            registrarProdutoServico.registra(getCpf)
            break
        case 10:
            let listagemTopQuantidade = new ListarTopQuantidade(empresa.getClientes)
            listagemTopQuantidade.listarTopQuantidade()
            break;
        case 0:
            execucao = false
            console.log(`FIM`)
            break;
        default:
            console.log(`Tecla não reconhecida`)
    }
}