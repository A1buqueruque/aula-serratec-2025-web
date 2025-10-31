import { useState } from "react";

export const Form = () => {
    return (
        <div>
            <div>
                <label>Nome:</label>
                <input
                    type='text'
                    placeholder='Digite seu nome' />
            </div>
            <div>
                <label>Idade:</label>
                <input
                    type='text'
                    placeholder='Digite sua idade' />
            </div>
            <br />
            <button>Enviar</button>
        </div>
    )
}