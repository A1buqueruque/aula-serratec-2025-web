import { useState } from "react";
import { FormContacts } from "../../components/FormContacts/Form";
import { ListContacts } from "../../components/ListContacts/ListContacts"
import styles from "./App.module.css"

function App() {
  const [contatos, setContatos] = useState([]);

  const adicionarContato = (novoContato) => {
    setContatos([...contatos, novoContato]);
  };

  const removerContato = (index) => {
    setContatos(contatos.filter((_, i) => i !== index));
  };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gerenciador de Contatos</h1>
      <FormContacts onAddContato={adicionarContato} />
      <div className={styles.cardContactContainer}>
        <ListContacts contatos={contatos} onRemoveContato={removerContato} />
      </div>
    </div>
  );
}

export default App;
