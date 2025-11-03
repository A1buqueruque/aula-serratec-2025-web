import { useState } from "react";
import styles from "./Form.module.css"

export function FormContacts({ onAddContato }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !telefone) return alert("Preencha todos os campos!");

    onAddContato({ nome, telefone });
    setNome("");
    setTelefone("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Adicionar Contato</button>
    </form>
  );
}
