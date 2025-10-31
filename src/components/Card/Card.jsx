import styles from "./Card.module.css";
import { FaReact, FaCoffee } from "react-icons/fa"
import logo from '../../assets/icon.png'

export const Card = ({ title, description, image }) => {


  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
