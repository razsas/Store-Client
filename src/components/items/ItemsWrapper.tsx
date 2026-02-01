"use client";

import { useState, useMemo } from "react";
import { Item } from "../../types";
import { SORT_OPTIONS, SortOption } from "../../types";
import { useItems } from "../../hooks/useItems";
import SearchBar from "./SearchBar";
import FilteredItemList from "./FilteredItemList";

interface ItemsWrapperProps {
  initialItems?: Item[];
}

export default function ItemsWrapper({ initialItems }: ItemsWrapperProps) {
  const { items, error } = useItems(initialItems ?? []);

  const [q, setQ] = useState("");
  const [type, setType] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>(SORT_OPTIONS.PRICE_ASC);

  const filteredItems = useMemo(() => {
    return items
      .filter((item) => {
        const itemName = item.name?.toLowerCase() || "";
        const itemSeller = item.seller?.toLowerCase() || "";
        const query = q.toLowerCase();

        const matchesSearch =
          itemName.includes(query) || itemSeller.includes(query);
        const matchesType = type ? item.type === type : true;
        return matchesSearch && matchesType;
      })
      .sort((a, b) => {
        if (sortBy === SORT_OPTIONS.PRICE_ASC)
          return (a.price || 0) - (b.price || 0);
        if (sortBy === SORT_OPTIONS.PRICE_DESC)
          return (b.price || 0) - (a.price || 0);
        if (sortBy === SORT_OPTIONS.NAME)
          return (a.name || "").localeCompare(b.name || "");
        return 0;
      });
  }, [items, q, type, sortBy]);

  return (
    <div>
      <SearchBar
        q={q}
        setQ={setQ}
        type={type}
        setType={setType}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <FilteredItemList items={filteredItems} apiError={error} />
    </div>
  );
}
