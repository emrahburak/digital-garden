import React, { FC } from "react";
import styles from "./logo.module.css";

function Logo({ children, ...props }: { children: React.ReactNode }) {
  return (
    <div className={styles.logo}>
      <p>Logo</p>
    </div>
  );
}

export default Logo;
