/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaProduto(props){
    
        return (
            <div>
                <div className="container-fluid">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('FormularioAlteraProduto', x)}
                        >Produto 1</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('FormularioAlteraProduto', x)}
                        >Produto 2</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('FormularioAlteraProduto', x)}
                        >Produto 3</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('FormularioAlteraProduto', x)}
                        >Produto 4</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('FormularioAlteraProduto', x)}
                        >Produto 5</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('FormularioAlteraProduto', x)}
                        >Produto 6</a>
                    </div>
                </div> <br />
                <div className="text-center">
                    <button type="button" className="btn btn-info" onClick={(x) => props.seletorView('FormularioCadastroProduto', x)}>
                        Cadastrar produto</button>
                </div>
            </div>
        )
    }