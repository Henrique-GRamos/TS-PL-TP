export default function Home(props){
    
    return (
        <div className="text-center">
            <div className="container-fluid text-center">
                <h2>Seja bem vindo a Pet Lovers, onde cuidar do seu pet é nosso prazer</h2>
            </div>
            <div>
                <button type="button" className="btn btn-outline-dark" onClick={(x) => props.seletorView('Clientes', x)}>Clientes</button>
                <button type="button" className="btn btn-outline-dark" onClick={(x) => props.seletorView('Produtos', x)}>Produtos</button>
                <button type="button" className="btn btn-outline-dark" onClick={(x) => props.seletorView('Serviços', x)}>Serviços</button>
                <button type="button" className="btn btn-outline-dark" onClick={(x) => props.seletorView('Pets', x)}>Pets</button>
            </div>
        </div>

    )
   
}