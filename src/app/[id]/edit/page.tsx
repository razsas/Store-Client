import ItemForm from "@/src/components/ItemForm";
import { getItem } from "@/src/utils/utils";
import { notFound } from "next/navigation";

export default async function EditItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Edit Item
      </h1>
      <ItemForm initialData={item} isEdit={true} />
    </div>
  );
}
