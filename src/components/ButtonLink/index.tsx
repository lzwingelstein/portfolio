import type { ReactElement } from "react";
import classes from "./button.module.css";
import Link from "next/link";

interface ButtonProps {
  children: string;
  href: string;
}

export default function ButtonLink({
  children,
  href,
}: ButtonProps): ReactElement {
  return (
    <Link className={classes.button} href={href}>
      {children}
    </Link>
  );
}
