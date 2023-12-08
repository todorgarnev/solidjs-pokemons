import { Component, Accessor } from "solid-js";
import styles from "./Button.module.css";

type ButtonProps = {
  children: string;
  page?: Accessor<number>;
  clickHandler?: () => void;
};

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button
      class={`${styles.button} ${props.page && !props.page() ? styles.disabled : ""}`}
      onClick={props.clickHandler}
      disabled={props.page && !props.page()}
    >
      {props.children}
    </button>
  );
};
