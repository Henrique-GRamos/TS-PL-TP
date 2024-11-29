export default function FormularioAlteraServico(props) {

    return (
        <div>
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do servico" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Preço do servico" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tipo do servico" />
                    </div>
                </form>
            </div> <br />
            <div className="text-center">
                <button className="btn btn-outline-secondary" type="button" onClick={(x) => props.seletorView('Serviços', x)} >Editar serviço</button>
                <button type="button" className="btn btn-secondary" onClick={(x) => props.seletorView('Serviços', x)} >Deletar serviço</button>
            </div>
        </div>
    )
    
}