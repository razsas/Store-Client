import Link from "next/link";
import { ITEM_BUTTON_MODES, ItemButtonMode } from "../types";

interface ItemButtonProps {
  mode: ItemButtonMode;
  id?: string;
}

export default function ItemButton({ mode, id }: ItemButtonProps) {
  const isEdit = mode === ITEM_BUTTON_MODES.EDIT;
  const href = isEdit ? `/${id}/edit` : "/new";
  const text = isEdit ? "Edit Item" : "Add Item";

  const colorClasses = isEdit
    ? "text-amber-600 border-amber-200 hover:bg-amber-50 hover:border-amber-300"
    : "text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300";

  const icon = isEdit ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 transition-transform group-hover:scale-110"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 transition-transform group-hover:scale-110"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  );

  return (
    <Link
      href={href}
      className={`w-full bg-white border ${colorClasses} py-3 px-6 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 group`}
    >
      {icon}
      {text}
    </Link>
  );
}
