import Link from "next/link";
import { ITEM_BUTTON_MODES, ItemButtonMode } from "../types";

interface ItemButtonProps {
  mode: ItemButtonMode;
  id?: string;
}

export default function ItemButton({ mode, id }: ItemButtonProps) {
  const isEdit = mode === ITEM_BUTTON_MODES.EDIT;
  const href = isEdit ? `/${id}/edit` : "/createItem";
  const text = isEdit ? "Edit Item" : "Add Item";
  const colorClasses = isEdit
    ? "bg-amber-600 hover:bg-amber-700 focus:ring-amber-300"
    : "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300";

  return (
    <div className="flex items-center">
      <Link
        href={href}
        className={`text-white ${colorClasses} focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 transition-colors`}
      >
        {text}
      </Link>
    </div>
  );
}
