import type { ReactElement } from "react";
import classes from "./button.module.css";

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export default function ButtonCTA({
  children,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button className={classes.button} onClick={onClick}>
      {children.toUpperCase()}
    </button>
  );
}
