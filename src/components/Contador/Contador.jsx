import { useState } from "react";

export const Contador = () => {

    const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(prevState => prevState + 1);
        setContador(prevState => prevState + 1);
        setContador(prevState => prevState + 1);
    }

    return (
        <>
            <div>
                <p>Você clicou {contador} vezes</p>
                <button onClick={incrementar}>Clique aqui</button>
            </div>
        </>
    )
}