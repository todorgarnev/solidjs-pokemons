import { Component } from "solid-js";
import styles from "./Button.module.css";

type ButtonProps = {
  children: string;
  isDisabled?: boolean;
  clickHandler?: () => void;
};

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button
      class={`${styles.button} ${props.isDisabled ? styles.disabled : ""}`}
      onClick={props.clickHandler}
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  );
};
