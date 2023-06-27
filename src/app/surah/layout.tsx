import SideListSurah from "@/components/SideListSurah";
import styles from "@/styles/Surah.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main}>
      <SideListSurah />
      <section className={styles.section}>{children}</section>
    </main>
  );
}
