import React from "react";
import styles from "./MenuList.module.css";

const MenuList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav className={styles.navegacao}>
      <ul>{children}</ul>
    </nav>
  );
};

export default MenuList;
