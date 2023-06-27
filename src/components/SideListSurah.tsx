"use client";
import { useGetAllSurah } from "@/features/fetch/useFetchSurah";
import styles from "@/styles/SideListSurah.module.css";
import { scheherazade } from "@/utils/fonts/fontsGoogle";
import { Surah } from "@/utils/types/Surah";
import Link from "next/link";
import Loading from "./Loading";
import Message from "./Message";

export default function SideListSurah() {
  const { data, isLoading, isFetching, error } = useGetAllSurah()

  return (
    <aside className={styles.container}>
      <div className={styles.header}>
        <Link href={"/"} title="Halaman Utama">
          <h2>AL-Quran</h2>
        </Link>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Cari Surah" />
        </div>
        <strong>DAFTAR SURAH :</strong>
      </div>
      {error ? (
        <Message title="Oh no, there was an error" />
      ) : isLoading || isFetching ? (
        <Loading />
      ) : (
        data && (
          <div className={styles.listSurah}>
            {data.map((surah: Surah) => (
              <Link href={`/surah/${surah.number}`} key={surah.number}>
                <div className={styles.card}>
                  <div className={styles.latin}>
                    <div className={styles.number}>
                      <span>{surah.number}.</span>
                    </div>
                    <div className={styles.detail}>
                      <span>{surah.name.transliteration.id}</span>
                      <div>
                        <span>{`${surah.name.translation.id} ${surah.numberOfVerses} ayat`}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`${styles.arab} ${scheherazade.className}`}>{surah.name.short}</span>
                </div>
              </Link>
            ))}
          </div>
        )
      )}
    </aside>
  );
}
