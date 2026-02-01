"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSWRConfig } from "swr";
import { deleteItem } from "../utils/utils";
import { ITEMS_KEY, itemKey } from "../hooks/useItems";

interface DeleteItemButtonProps {
  id: string;
  itemName: string;
}

export default function DeleteItemButton({
  id,
  itemName,
}: DeleteItemButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();
  const { mutate } = useSWRConfig();

  async function handleDelete() {
    setIsDeleting(true);
    try {
      await deleteItem(id);
      await mutate(ITEMS_KEY);
      await mutate(itemKey(id), undefined, { revalidate: false });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Failed to delete item:", error);
      setIsDeleting(false);
      setShowConfirm(false);
    }
  }

  if (showConfirm) {
    return (
      <div className="flex flex-col gap-2 p-4 bg-red-50 border border-red-200 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
        <p className="text-sm text-red-700 font-medium">
          Are you sure you want to delete{" "}
          <span className="font-bold">"{itemName}"</span>?
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md text-sm font-bold hover:bg-red-700 transition-colors disabled:opacity-50 cursor-pointer"
          >
            {isDeleting ? "Deleting..." : "Yes, Delete"}
          </button>
          <button
            onClick={() => setShowConfirm(false)}
            disabled={isDeleting}
            className="flex-1 bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-md text-sm font-bold hover:bg-gray-50 transition-colors disabled:opacity-50 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowConfirm(true)}
      className="w-full bg-white text-red-600 border border-red-200 py-3 px-6 rounded-xl font-bold hover:bg-red-50 hover:border-red-300 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-red-500 group-hover:scale-110 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
      Delete Item
    </button>
  );
}
