"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { ITEM_TYPES, SORT_OPTIONS, SortOption } from "../../types";

interface SearchBarProps {
  q: string;
  setQ: (val: string) => void;
  type: string;
  setType: (val: string) => void;
  sortBy: SortOption;
  setSortBy: (val: SortOption) => void;
}

export default function SearchBar({
  q,
  setQ,
  type,
  setType,
  sortBy,
  setSortBy,
}: SearchBarProps) {
  const [localSearch, setLocalSearch] = useState(q);
  const [debouncedSearch] = useDebounce(localSearch, 300);

  useEffect(() => {
    setQ(debouncedSearch);
  }, [debouncedSearch, setQ]);

  const inputClasses =
    "bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
  const labelClasses = "block mb-2 text-sm font-medium text-gray-900 ps-2.5";

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 bg-gray-50 p-4 rounded-lg shadow-sm">
      <div className="flex-1">
        <label htmlFor="search" className={labelClasses}>
          Search
        </label>
        <input
          id="search"
          type="text"
          className={inputClasses}
          placeholder="Search items..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
        />
      </div>

      <div className="w-full md:w-48">
        <label htmlFor="type" className={labelClasses}>
          Filter by Type
        </label>
        <select
          id="type"
          className={inputClasses}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All Types</option>
          {Object.values(ITEM_TYPES).map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full md:w-48">
        <label htmlFor="sort" className={labelClasses}>
          Sort by
        </label>
        <select
          id="sort"
          className={inputClasses}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
        >
          {Object.entries(SORT_OPTIONS).map(([key, value]) => (
            <option key={value} value={value}>
              {key
                .replace("_", " ")
                .toLowerCase()
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
