import { notFound } from "next/navigation";
import ItemDetail from "@/src/components/ItemDetail";
import { getItem } from "@/src/utils/utils";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    notFound();
  }

  return <ItemDetail item={item} />;
}
