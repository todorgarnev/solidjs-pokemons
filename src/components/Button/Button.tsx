import { Component } from "solid-js";
import styles from "./Button.module.css";

type ButtonProps = {
  children: string;
};

export const Button: Component<ButtonProps> = ({ children }) => {
  return <button class={styles.button}>{children}</button>;
};
