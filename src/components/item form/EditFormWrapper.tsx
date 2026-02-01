"use client";

import { notFound } from "next/navigation";
import { useItem } from "../../hooks/useItems";
import ItemForm from "./ItemForm";

export default function EditFormWrapper({ id }: { id: string }) {
  const { item, isLoading, error } = useItem(id);

  if (isLoading) {
    return (
      <div className="max-w-md mx-auto animate-pulse bg-gray-100 rounded-xl h-96" />
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

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Edit Item
      </h1>
      <ItemForm initialData={item} isEdit={true} />
    </div>
  );
}
