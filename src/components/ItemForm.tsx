"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { Item, ITEM_TYPES } from "../types";
import { API_BASE_URL, NAME_SELLER_REGEX, PRICE_REGEX } from "../constants";
import BackButton from "./BackButton";

interface ItemFormProps {
  initialData?: Item;
  isEdit?: boolean;
}

export default function ItemForm({
  initialData,
  isEdit = false,
}: ItemFormProps) {
  const router = useRouter();

  async function formAction(_prevState: string | null, formData: FormData) {
    const name = formData.get("name") as string;
    const seller = formData.get("seller") as string;
    const type = formData.get("type") as string;
    const priceStr = formData.get("price") as string;
    const price = parseFloat(priceStr);

    if (!NAME_SELLER_REGEX.test(name)) {
      return "Item name must be 3-30 characters and contain only letters, numbers, and spaces.";
    }
    if (!NAME_SELLER_REGEX.test(seller)) {
      return "Seller name must be 3-30 characters and contain only letters, numbers, and spaces.";
    }
    if (!PRICE_REGEX.test(priceStr)) {
      return "Price must be a positive number with up to 2 decimal places.";
    }

    const data = {
      name,
      seller,
      type,
      price,
    };

    try {
      const url = isEdit
        ? `${API_BASE_URL}/items/${initialData?.id}`
        : `${API_BASE_URL}/items`;
      const res = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        return errorData.error || "Failed to save item";
      }

      router.push("/");
      router.refresh();
      return null;
    } catch {
      return "An error occurred. Please try again.";
    }
  }

  const [error, submitAction, isPending] = useActionState(formAction, null);

  const inputClasses =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
  const labelClasses = "block mb-2 text-sm font-medium text-gray-900";

  return (
    <div className="max-w-md mx-auto">
      <BackButton
        href={isEdit ? `/${initialData?.id}` : "/"}
        text={isEdit ? "Back to Item" : "Back to List"}
        className="mb-6"
      />

      <form action={submitAction} className="space-y-6">
        {error && (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 border border-red-200"
            role="alert"
          >
            {error}
          </div>
        )}

        <div>
          <label htmlFor="name" className={labelClasses}>
            Item Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={inputClasses}
            defaultValue={initialData?.name || ""}
            placeholder="e.g. Vintage Camera"
            required
            title="3-30 characters, letters, numbers, and spaces only"
          />
        </div>

        <div>
          <label htmlFor="seller" className={labelClasses}>
            Seller
          </label>
          <input
            id="seller"
            name="seller"
            type="text"
            className={inputClasses}
            defaultValue={initialData?.seller || ""}
            placeholder="e.g. John Doe"
            required
            title="3-30 characters, letters, numbers, and spaces only"
          />
        </div>

        <div>
          <label htmlFor="type" className={labelClasses}>
            Type
          </label>
          <select
            id="type"
            name="type"
            className={inputClasses}
            defaultValue={initialData?.type || ""}
            required
          >
            <option value="" disabled>
              Select a type
            </option>
            {Object.values(ITEM_TYPES).map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="price" className={labelClasses}>
            Price ($)
          </label>
          <input
            id="price"
            name="price"
            type="text"
            className={inputClasses}
            defaultValue={initialData?.price || 0}
            required
            pattern="^\d+(\.\d{1,2})?$"
            title="Positive number with up to 2 decimal places"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-all ${
            isPending ? "opacity-50 cursor-not-allowed scale-95" : ""
          }`}
        >
          {isPending ? "Saving..." : isEdit ? "Update Item" : "Add Item"}
        </button>
      </form>
    </div>
  );
}
