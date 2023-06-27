"use client";
import { useGetSurahWithNumber } from "@/features/fetch/useFetchSurah";
import styles from "@/styles/Surah.module.css";
import { scheherazade } from "@/utils/fonts/fontsGoogle";
import Loading from "./Loading";
import Message from "./Message";

export default function Surah({ number }: { number: string }) {
  const { data, isLoading, isFetching, error } = useGetSurahWithNumber(number);
  const verses = data?.verses;

  return (
    <>
      {error ? (
        <Message title="Oh no, there was an error" />
      ) : isLoading || isFetching ? (
        <Loading />
      ) : (
        data && (
          <div className={styles.verses}>
            <div className={styles.surahName}>
              <h2>{data.name.transliteration.id}</h2>
              <h3>({data.name.translation.id})</h3>
              <span>{`Surah : ${data.revelation.id}`}</span>
            </div>
            {verses?.map((verse, index) => (
              <blockquote
                key={index}
                className={`${styles.arab} ${scheherazade.className}`}
              >{`${verse.text.arab} (${verse.number.inSurah.toLocaleString("ar-EG")})`}</blockquote>
            ))}
          </div>
        )
      )}
    </>
  );
}
