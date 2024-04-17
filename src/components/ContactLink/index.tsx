"use client";
import type { ReactElement } from "react";
import classes from "./button.module.css";

export default function ContactLink(): ReactElement {
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    const section = document.getElementById(`contact`);
    section?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button className={classes.button} onClick={scrollToTop}>
      CONTACT ME
    </button>
  );
}
