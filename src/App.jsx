import { useState } from "react";
import styles from "./App.module.css";

import { Card } from "./components/Card/Card";
import { ContactCard } from "./components/CardContacts/CardContacts";
import { Footer } from "./components/Footer/Footer";
import {Contador} from "./components/Contador/Contador"
import { Form } from "./components/Form/Form";

import icone from "./assets/icon.png"
import foto from './assets/pCountinho.jpg'
import matheus from './assets/matheus.jpg'

export default function App() {
  const [nome, setNome] = useState()


  //Variavel cardsData que possui as informações dos cards que utilizamos na linha 30
  const cardsData = [
    {
      title: "React + Vite",
      description: "Um projeto rápido e moderno com Vite.",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      title: "CSS Modules",
      description: "Estilos isolados e organizados por componente.",
      image: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    },
    {
      title: "Componentização",
      description: "Reutilize componentes com diferentes props.",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721292.png",
    },
    {
      title: "Vasco da Gama",
      description: "Gigantesco da colina",
      image: icone,
    },
  ];

  const contacts = [
    {
      id: 1,
      name: "Matheus Albuquerque",
      email: "matheus.albuquerque@exemplo.com",
      image: matheus
    },
    {
      id: 2,
      name: "Irene da Costa",
      email: "irene.costa@exemplo.com",
      image: "https://placehold.co/150x150/CBD5E0/4A5568?text=Irene"
    },
    {
      id: 3,
      name: "Nicolas Davi",
      email: "nicolas.davi@exemplo.com",
      image: "https://placehold.co/150x150/A0AEC0/4A5568?text=Nicolas"
    },
    {
      id: 4,
      name: "Rodrigo Morais",
      email: "rodrigo.morais@exemplo.com",
      image: foto
    },
    {
      id: 5,
      name: "João Dias",
      email: "joao.dias@exemplo.com",
      image: "https://placehold.co/150x150/A0AEC0/4A5568?text=João"
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Meus Cards Dinâmicos</h1>
      {/* <Contador/> */}
      <Form/>
      {/* <div className={styles.grid}>
        {cardsData.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          )
        })}
      </div>
      <div className={styles.cardContactContainer}>
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            email={contact.email}
            image={contact.image}
          />))}
      </div> */}
      <Footer />
    </div>
  );
}
