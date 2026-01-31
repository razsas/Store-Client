import { Metadata } from "next";
import ItemsManager from "../components/ItemsManager";
import ItemButton from "../components/ItemButton";

export const metadata: Metadata = {
  title: "Store App",
};

export default async function Home() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">Browse Items</h1>
        <ItemButton mode="add" />
      </div>

      <ItemsManager />
    </div>
  );
}
