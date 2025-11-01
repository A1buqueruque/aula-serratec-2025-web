import { useState } from "react";

export const Form = () => {

    const [nome, setNome] = useState("")

    const handleSubmit = (e) =>{
        console.log("Nome:", nome)
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nomeInput">Nome:</label>
                <input
                    id="nomeInput"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                />
            </form>
            {nome}
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    )
}