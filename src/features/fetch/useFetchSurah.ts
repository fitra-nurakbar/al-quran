import { axiosInstance } from "@/lib/axiosInstance";
import { Surah } from "@/utils/types/Surah";
import { useQuery } from "@tanstack/react-query";

function useGetAllSurah() {
  const { data, isLoading, isFetching, error } = useQuery<Surah[], Error>({
    queryKey: ["list-surah"],
    queryFn: async () => {
      const surahResponse = await axiosInstance.get("/surah");
      const surah = surahResponse.data.data as Surah[];

      return surah;
    },
  });

  return { data, isLoading, isFetching, error };
}

function useGetSurahWithNumber(number: string) {
  const { data, isLoading, isFetching, error } = useQuery<Surah, Error>({
    queryKey: ["surah", number],
    queryFn: async () => {
      const surahResponse = await axiosInstance.get(`/surah/${number}`);
      const surah = surahResponse.data.data as Surah;

      return surah;
    },
  });

  return { data, isLoading, isFetching, error };
}

export { useGetAllSurah, useGetSurahWithNumber };
