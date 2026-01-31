import useSWR from "swr";
import { API_BASE_URL } from "../constants";
import { Item } from "../types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useItems(fallbackData?: Item[]) {
  const { data, error, mutate, isLoading } = useSWR<Item[]>(
    `${API_BASE_URL}/items`,
    fetcher,
    {
      fallbackData,
      revalidateOnFocus: false,
    },
  );

  return {
    items: data || [],
    isLoading,
    error,
    mutate,
  };
}
