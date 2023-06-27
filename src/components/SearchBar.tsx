import styles from "@/styles/SearchBar.module.css"

export default function SearchBar() {
  return (
    <button className={styles.searchBar}>
        <input type="text" placeholder="Cari Surah Yang diinginkan" />
      </button>
  )
}
