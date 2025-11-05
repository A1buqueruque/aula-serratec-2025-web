import { useState } from "react";
import { FormContacts } from "../../components/FormContacts/Form";
import { ListContacts } from "../../components/ListContacts/ListContacts"
import {criarContato, deletarContato} from "../../services/apiServices"
import styles from "./App.module.css"
import { useAuth } from "../../context/authContext";


function App() {
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const {nome} = useAuth()

  const adicionarContato = (novoContato) => {
    setContatos([...contatos, novoContato]);
  };

  const removerContato = (index) => {
    setContatos(contatos.filter((_, i) => i !== index));
  };

  async function cadastrarContato() {
    var addContato
    const objeto = {
      nome: "Bolhao",
      telefone: "249"
    }
    try{
        setLoading(true)
        addContato = await criarContato(contatos)
    } catch(error){
      setError(error.message)
    } finally{
      setLoading(false)
    }
    localStorage.setItem("nome", JSON.stringify(objeto))
    console.log(addContato);
  }

  async function deletarContato(id) {
    var dellContato
    try{
      setLoading(true)
       dellContato = await deletarContato(id)
       const Novalista = contatos.filter( contato => contatos.id != dellContato.id)
       setContatos(Novalista)
    }catch(error){
      setError(error.message)
    } finally{
      setLoading(false)
    }
    console.log(dellContato);
  }

  console.log(contatos);
  

  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Olá {nome},Gerenciador de Contatos</h1>
       <button onClick={cadastrarContato}>CHAMAR API </button>
            <button onClick={deletarContato}>DELETE API </button>
      <FormContacts onAddContato={adicionarContato} />
      <div className={styles.cardContactContainer}>
        <ListContacts contatos={contatos} onRemoveContato={removerContato} />
      </div>
     
    </div>
  );
}

export default App;
