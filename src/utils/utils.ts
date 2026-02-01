import { API_BASE_URL } from "@/src/constants";
import { NAME_SELLER_REGEX, PRICE_REGEX } from "@/src/constants";
import { CreateItemPayload, Item, UpdateItemPayload } from "@/src/types";

const ITEMS_URL = `${API_BASE_URL}/items`;

export function validateItemForm(data: {
  name: string;
  seller: string;
  priceStr: string;
}): string | null {
  const { name, seller, priceStr } = data;
  if (!NAME_SELLER_REGEX.test(name)) {
    return "Item name must be 3-30 characters and contain only letters, numbers, and spaces.";
  }
  if (!NAME_SELLER_REGEX.test(seller)) {
    return "Seller name must be 3-30 characters and contain only letters, numbers, and spaces.";
  }
  if (!PRICE_REGEX.test(priceStr)) {
    return "Price must be a positive number with up to 2 decimal places.";
  }
  if (Number(priceStr) <= 0) {
    return "Price must be greater than zero.";
  }
  return null;
}

export async function getItems(): Promise<Item[]> {
  const res = await fetch(ITEMS_URL);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(
      (err as { error?: string }).error ?? "Failed to fetch items",
    );
  }
  return res.json();
}

export async function getItemsForServer(): Promise<Item[]> {
  const res = await fetch(ITEMS_URL, { cache: "no-store" });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(
      (err as { error?: string }).error ?? "Failed to fetch items",
    );
  }
  return res.json();
}

export async function getItem(id: string): Promise<Item | null> {
  const res = await fetch(`${ITEMS_URL}/${id}`);
  if (!res.ok) {
    if (res.status === 404) return null;
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error ?? "Item not found");
  }
  return res.json();
}

export async function createItem(payload: CreateItemPayload): Promise<Item> {
  const res = await fetch(ITEMS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(
      (err as { error?: string }).error ?? "Failed to create item",
    );
  }
  return res.json();
}

export async function updateItem(
  id: string,
  payload: UpdateItemPayload,
): Promise<Item> {
  const res = await fetch(`${ITEMS_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    if (res.status === 404) throw new Error("Item not found");
    const err = await res.json().catch(() => ({}));
    throw new Error(
      (err as { error?: string }).error ?? "Failed to update item",
    );
  }
  return res.json();
}

export async function deleteItem(id: string): Promise<void> {
  const res = await fetch(`${ITEMS_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    if (res.status === 404) throw new Error("Item not found");
    const err = await res.json().catch(() => ({}));
    throw new Error(
      (err as { error?: string }).error ?? "Failed to delete item",
    );
  }
}
