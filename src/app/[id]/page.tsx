import type { Metadata } from "next";
import ItemDetailWrapper from "@/src/components/item/ItemDetailWrapper";
import { getItem } from "@/src/utils/utils";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = await getItem(id);
  return {
    title: item ? `${item.name} | Store App` : "Item not found",
  };
}

export default async function ItemPage({ params }: Props) {
  const { id } = await params;
  return <ItemDetailWrapper id={id} />;
}
