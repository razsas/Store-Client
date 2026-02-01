import type { Metadata } from "next";
import { getItem } from "@/src/utils/utils";
import EditFormWrapper from "@/src/components/item form/EditFormWrapper";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = await getItem(id);
  return {
    title: item ? `Edit: ${item.name} | Store App` : "Item not found",
  };
}

export default async function EditItemPage({ params }: Props) {
  const { id } = await params;
  return <EditFormWrapper id={id} />;
}
