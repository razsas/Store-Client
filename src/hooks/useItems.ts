import useSWR from "swr";
import { Item } from "../types";

const ITEMS_KEY = "items";

export function itemKey(id: string | null) {
  return id ? [ITEMS_KEY, id] : null;
}

export function useItems(fallbackData?: Item[]) {
  const { data, error, mutate, isLoading } = useSWR<Item[]>(ITEMS_KEY, null, {
    fallbackData,
  });

  return {
    items: data ?? [],
    isLoading,
    error: error instanceof Error ? error : undefined,
    mutate,
  };
}

export function useItem(id: string | null) {
  const { data, error, mutate, isLoading } = useSWR<Item | null>(itemKey(id));

  return {
    item: data ?? null,
    isLoading,
    error: error instanceof Error ? error : undefined,
    mutate,
  };
}

export { ITEMS_KEY };
