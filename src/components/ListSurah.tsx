"use client";
import { useGetAllSurah } from "@/features/fetch/useFetchSurah";
import styles from "@/styles/ListSurah.module.css";
import { scheherazade } from "@/utils/fonts/fontsGoogle";
import { Surah } from "@/utils/types/Surah";
import Link from "next/link";
import Loading from "./Loading";
import Message from "./Message";

export default function ListSurah() {
  const { data, isLoading, isFetching, error } = useGetAllSurah();

  return (
    <>
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
                    <span className={styles.number}>{`${surah.number}.`}</span>
                    <div className={styles.detail}>
                      <span>{surah.name.transliteration.id}</span>
                      <span>{`${surah.name.translation.id} ${surah.numberOfVerses} Ayat`}</span>
                    </div>
                  </div>
                  <span className={`${styles.arab} ${scheherazade.className}`}>{surah.name.short}</span>
                </div>
              </Link>
            ))}
          </div>
        )
      )}
    </>
  );
}
