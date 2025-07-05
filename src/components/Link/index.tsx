import styles from "./Link.module.css";

const Link = ({
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a className={styles.link} {...rest}>
      {children}
    </a>
  );
};

export default Link;

// o children nesse caso ele serve para que quando eu clicar na tag a, ele possa chamar qualquer coisa que eu precise, imagens, fotos e etc.

// o ...rest é um operador que serve para eu pegart todos os atributos sem que eu precisa passar todos como props.

// o React.AnchorHTMLAttributes<HTMLAnchorElement> serve para eu poder tipar o children como um elemento html, podendo assim utilizar ele corretamente para trazer elementos como imagens, textos e etc.
