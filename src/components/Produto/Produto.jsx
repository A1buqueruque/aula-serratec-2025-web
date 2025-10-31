
import "./Produto.module.css"

export const Produto = (props)=>{
    return(
        <div>
          <div>
            <label> FOTO</label>
          </div>
            <div>
                <label>Preço:</label> 
            </div>
            <div>
                <label>Nome: {props.nome}</label>
            </div>
             <label>Descrição:</label>
            <br />
            <button>Comprar</button>
        </div>
    )
}