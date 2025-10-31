import styles from "./App.module.css";
import { Card } from "./components/Card/Card";
import { Footer } from "./components/Footer/Footer";

export default function App() {

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
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Meus Cards Dinâmicos</h1>
      <div className={styles.grid}>
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
      <Footer />
    </div>
  );
}
