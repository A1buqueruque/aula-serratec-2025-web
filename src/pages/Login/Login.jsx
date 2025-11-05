import { useState } from "react"

export const Login = ()=>{

    const[email, setUsario]=useState()
    const[senha, setSenha]=useState()

    return(
        <div>
            <label>Email:</label>
            <input/>
            <label>Senha:</label>
            <input/>
        </div>
    )

}