"use client";
import { Item } from "../types";
import ItemCard from "./ItemCard";

export default function FilteredItemList({
  items,
  apiError,
}: {
  items: Item[];
  apiError: string | null;
}) {
  if (apiError) return <ErrorState message={apiError} />;
  if (items.length === 0) return <EmptyState />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

const ErrorState = ({ message }: { message: string }) => (
  <div className="text-center py-12 bg-red-50 rounded-lg border border-red-200">
    <p className="text-red-600 text-lg font-medium">{message}</p>
  </div>
);

const EmptyState = () => (
  <div className="text-center py-12">
    <p className="text-gray-500 text-lg">
      No items found matching your criteria.
    </p>
  </div>
);
