import { useState, useEffect } from "react";
import api from "../../services/api";

export const Home = () =>{

    const [habilidades, setHabilidades] = useState([])

    async function getData(){
        try{
            const response = await api.get("/habilidades")
            setHabilidades (response.data)
            console.log(response.data);
        }catch{
            console.error(response.error)
        }
    }

    useEffect(()=>{
        getData();
    },[])

//  console.log("Habilidades:",habilidades)

    return(
        <div>
            <h1>Hello!</h1>
            {habilidades.map((info, index) =>(
                <div key={info.id} >
                    <span>{info.habilidade}</span>
                    <br></br>
                    <span>{info.studentEmail}</span>
                </div>
            ))}
        </div>
    )
}