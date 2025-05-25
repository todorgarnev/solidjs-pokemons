import { Component } from "solid-js";
import styles from "./Button.module.css";

type ButtonProps = {
  children: string;
  isDisabled?: boolean;
  clickHandler?: () => void;
};

export const Button: Component<ButtonProps> = ({ clickHandler, isDisabled, children }) => {
  return (
    <button
      class={`${styles.button} ${isDisabled ? styles.disabled : ""}`}
      onClick={clickHandler}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
