import { Metadata } from "next";
import ItemsWrapper from "../components/items/ItemsWrapper";
import ItemButton from "../components/ItemButton";
import { getItemsForServer } from "../utils/utils";

export const metadata: Metadata = {
  title: "Browse Items",
};

export default async function Home() {
  const initialItems = await getItemsForServer().catch(() => []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">Browse Items</h1>
        <ItemButton mode="add" />
      </div>

      <ItemsWrapper initialItems={initialItems} />
    </div>
  );
}
