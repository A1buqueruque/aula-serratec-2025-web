import React from "react";

import styles from './CardContacts.module.css'

export function ContactCard({ image, name, email }) {
  return (
     <div className={styles.card}>
          <img src={image} className={styles.image} />
          <div className={styles.content}>
            <h2 className={styles.title}>{name}</h2>
            <p className={styles.description}>{email}</p>
          </div>
        </div>
  );
}