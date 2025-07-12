import styles from "./Tag.module.css";
import classNames from "classnames";

type Categoria = "2D" | "3D";
type Censura = "Livre" | "10 Anos" | "12 Anos" | "14 Anos" | "16 Anos";

interface TagProps {
  value: Censura | Categoria;
}

const tagClasses = {
  Livre: styles.livre,
  "10 Anos": styles.dez,
  "12 Anos": styles.doze,
  "14 Anos": styles.catorze,
  "16 Anos": styles.dezesseis,
  "2D": styles.doisD,
  "3D": styles.tresD,
};

const Tag = ({ value }: TagProps) => {
  const classes = classNames(styles.tag, tagClasses[value]);
  return <span className={classes}>{value}</span>;
};

export default Tag;
