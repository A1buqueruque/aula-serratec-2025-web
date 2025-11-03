import React from "react";

import styles from './CardContacts.module.css'

export function CardContacts({ contato, onRemove  }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>{contato.nome}</h2>
        <p className={styles.description}>{contato.telefone}</p>
      </div>
      <button onClick={onRemove} className={styles.button}>
        Remover
      </button>
    </div>
  );
}