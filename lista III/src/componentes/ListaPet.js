/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaPet(props){
    
        return (
            <div>
                <div className="container-fluid">
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('FormularioAlteraPet', x)}
                        >Pet 1</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('FormularioAlteraPet', x)}
                        >Pet 2</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('FormularioAlteraPet', x)}
                        >Pet 3</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('FormularioAlteraPet', x)}
                        >Pet 4</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('FormularioAlteraPet', x)}
                        >Pet 5</a>
                        <a href="#" className="list-group-item list-group-item-action" onClick={(x) => props.seletorView('FormularioAlteraPet', x)}
                        >Pet 6</a>
                    </div>
                </div> <br />
                <div className="text-center">
                    <button type="button" className="btn btn-info" onClick={(x) => props.seletorView('FormularioCadastroPet', x)}>
                        Cadastrar Pet</button>
                </div>

            </div>
        )
    
}