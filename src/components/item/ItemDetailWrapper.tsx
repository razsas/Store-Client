"use client";

import { notFound } from "next/navigation";
import { useItem } from "../../hooks/useItems";
import ItemDetail from "./ItemDetail";

export default function ItemDetailWrapper({ id }: { id: string }) {
  const { item, isLoading, error } = useItem(id);

  if (isLoading) {
    return (
      <div className="max-w-[700px] mx-auto animate-pulse bg-gray-100 rounded-xl h-96" />
    );
  }
  if (error) {
    return (
      <div className="text-center py-12 bg-red-50 rounded-lg border border-red-200">
        <p className="text-red-600 text-lg font-medium">{error.message}</p>
      </div>
    );
  }
  if (!item) {
    notFound();
  }

  return <ItemDetail item={item} />;
}
