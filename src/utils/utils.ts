import { API_BASE_URL } from "@/src/constants";
import { Item } from "@/src/types";

export async function getItem(id: string): Promise<Item | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/items/${id}`);
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error("item not found");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
