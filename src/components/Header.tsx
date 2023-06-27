import styles from "@/styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <select name="" id="">
          <option value="">English</option>
          <option value="">Indonesia</option>
        </select>
      </nav>
      <div>
        <h1 className={styles.title}>AL-Quran</h1>
      </div>
    </header>
  );
}
