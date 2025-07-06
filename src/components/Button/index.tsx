import classNames from "classnames";
import styles from "./Button.module.css";

import React from "react";

type ButtonProps = {
  variant: "default" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant = "default", ...rest }: ButtonProps) => {
  const classMap = {
    default: styles.default,
    icon: styles.icon,
  };
  return (
    <button className={classNames(styles.botao, classMap[variant])} {...rest}>
      {children}
    </button>
  );
};

export default Button;

// o variant é uma prop que serve para eu poder passar o tipo de botão que eu quero, podendo ser um botão padrão ou um botão de ícone. Se eu não passar nada, ele vai ser um botão default. Posso criar outras propriedades para o botão no arquivo css e chamar de acordo com que eu precisar.
// o ...rest é o operador que serve pra eu chamar os outros atributos do botão, como onClick e etc. 

