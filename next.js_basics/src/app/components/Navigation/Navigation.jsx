"use client";
import Link from 'next/link';
import styles from "./Navigation.module.css"

export default function Navigation({path, text}){
    return (
    <nav>
      <Link href={path}
            className={styles.nav}
      >{text}</Link>
    </nav>
  );
}