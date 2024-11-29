/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaTopMaisValor(props){
   
        return (
            <div>
                <div className="container-fluid text-center">
                    <h1>Top 5 clientes que mais consumiram em valor!</h1>
                </div>

                <div className="container-fluid">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 1</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 2</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 3</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 4</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" onClick={(x) => props.seletorView('FormularioAlteraPet', x)}
                        >Cliente 5</a>
                    </div>
                </div> <br />
                <div className="text-center">
                    <button type="button" className="btn btn-info" onClick={(x) => props.seletorView('Listagem', x)}>
                        Voltar para a listagem</button>
                </div>

            </div>
        )

}