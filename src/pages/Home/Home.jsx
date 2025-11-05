import { useState, useEffect} from "react";
import {getData} from "../../services/apiServices"
import { useAuth } from "../../context/authContext";

export const Home = () =>{

    const [habilidades, setHabilidades] = useState([])
    const [loading, setLoading] = useState(true)
    const [telefone, setTelefone] = useState()
    const [error, setError] = useState(null)

    const {nome} = useAuth()


    async function buscarHabilidades() {
        try{
            setLoading(true)
            const RespostaDaApi = await getData()
            setHabilidades(RespostaDaApi)
            setError(null)
        } catch (error){
            setError(error)
            console.error(error.message);
        } finally{
            setLoading(false)
        }
    }

    //  const salvarLocalStorage = () => {
    //     const contatoLocal = localStorage.getItem("nome");      
    //     const contatoObj = JSON.parse(contatoLocal)
    //     console.log(contatoObj.telefone);
    // }
   

    useEffect(()=>{
        buscarHabilidades();
    },[])
    

    //if(loading) return <div>Carregando...</div>
    //  console.log("Habilidades:", data)

    return(
        <div>
            <h1>Hello! {nome}</h1>
            <div> Habilidades:</div>
            {loading ? <div> Carregando... </div> :  
            habilidades.map((info, index) =>(
                <div key={info.id} >
                    <span>{info.habilidade}</span>
                    <br></br>
                    <span>{info.studentEmail}</span>
                </div>
            ))
            }

            {/* <button onClick={salvarLocalStorage}>SALVAR LOCAL STORAGE</button> */}
        </div>
    )
}