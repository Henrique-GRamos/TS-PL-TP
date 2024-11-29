/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioAlteraCliente from "./formularioAlteraCliente";
import FormularioAlteraPet from './formularioAlteraPet';
import FormularioAlteraProduto from './formularioAlteraProduto';
import FormularioAlteraServico from "./formularioAlteraServico";
import FormularioCadastroPet from './formularioCadastroPet';
import FormularioCadastroProduto from './formularioCadastroProduto';
import FormularioCadastroServico from "./formularioCadastroServico";
import Home from "./Home";
import Listagem from "./Listagem";
import ListaPet from "./ListaPet";
import ListaProduto from "./ListaProduto";
import ListaServico from "./ListaServico"
import ListaTopMaisProduto from "./listaTopMaisProduto";
import ListaTopMaisServiço from "./listaTopMaisServiço"
import ListaTopMaisValor from "./listaTopMaisValor";
import ListaTopMenosProduto from "./listaTopMenosProduto"
import ListaTopMenosServiço from "./listaTopMenosServiço";



export default function Roteador() {
    const [tela, setTela] = useState('Home')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        let barraNavegacao = <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Home','Clientes', 'Produtos', 'Serviços','Pets', 'Listagem']} />
        if (tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <Home tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'Listagem') {
            return (
                <>
                    {barraNavegacao}
                    <Listagem tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'ListaTopMaisProduto') {
            return (
                <>
                    {barraNavegacao}
                    <ListaTopMaisProduto tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'ListaTopMenosProduto') {
            return (
                <>
                    {barraNavegacao}
                    <ListaTopMenosProduto tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'ListaTopMaisServiço') {
            return (
                <>
                    {barraNavegacao}
                    <ListaTopMaisServiço tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'ListaTopMenosServiço') {
            return (
                <>
                    {barraNavegacao}
                    <ListaTopMenosServiço tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'ListaTopMaisValor') {
            return (
                <>
                    {barraNavegacao}
                    <ListaTopMaisValor tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }

        if (tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'Pets') {
            return (
                <>
                    {barraNavegacao}
                    <ListaPet tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'FormularioCadastroCliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'FormularioCadastroPet') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroPet tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'FormularioCadastroServico') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'FormularioCadastroProduto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'FormularioAlteraCliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioAlteraCliente tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'FormularioAlteraPet') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioAlteraPet tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'FormularioAlteraProduto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioAlteraProduto tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
        if (tela === 'FormularioAlteraServico') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioAlteraServico tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        }
    }

    return (
        construirView()
    )
}