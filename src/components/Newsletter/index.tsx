import styles from "./Newsletter.module.css";
import Fieldset from "../Fieldset";
import InputText from "../InputText.tsx";
import Button from "../Button";

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.titulo}>Inscreva-se para ganhar descontos</h2>
      <form className={styles.form}>
        <Fieldset>
          <InputText placeholder="Digite seu melhor email" />
        </Fieldset>
        <Button variant="default" type="submit">
          Inscreva-se
        </Button>
      </form>
    </section>
  );
};

export default Newsletter;
