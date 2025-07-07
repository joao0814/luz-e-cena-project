import React from "react";
import styles from "./Header.module.css";

const HeaderLisItem = ({ children }: React.LiHTMLAttributes<HTMLLIElement>) => {
  return <li className={styles.menuitem}>{children}</li>;
};

export default HeaderLisItem;
