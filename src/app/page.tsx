import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListSurah from "@/components/ListSurah";
import styles from "@/styles/Dashboard.module.css"

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Header />
      <ListSurah />
      <Footer />
    </main>
  );
}
