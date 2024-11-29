/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Listagem(props){

        return (
            <div>
                <div className="text-center">
                    <div className="container-fluid text-center">
                        <h1>Listagens especiais!</h1>
                    </div>
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('ListaTopMaisProduto', x)}
                        >Top 10 clientes que mais consumiram produtos </a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('ListaTopMaisServiço', x)}
                        >Top 10 clientes que mais consumiram serviços</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('ListaTopMaisValor', x)}
                        >Top 5 clientes que mais consumiram em valor</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('ListaTopMenosProduto', x)}
                        >Top 10 clientes que menos consumiram produtos</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('ListaTopMenosServiço', x)}
                        >Top 10 clientes que menos consumiram serviços</a>
                    </div>
                </div>
            </div>

        )
    
}