import ItemForm from "@/src/components/ItemForm";

export default function NewItemPage() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Add New Item
      </h1>
      <ItemForm />
    </div>
  );
}
