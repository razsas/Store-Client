"use client";

import { Item } from "../../types";
import ItemButton from "../ItemButton";
import BackButton from "../BackButton";
import DeleteItemButton from "../DeleteItemButton";

export default function ItemCard({ item }: { item: Item }) {
  const labelClasses =
    "font-semibold text-gray-400 text-xs uppercase tracking-wider";
  const defaultImage = `https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?semt=ais_hybrid&w=740&q=80`;

  return (
    <div className="max-w-[700px] mx-auto bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
      {/* 1. Back Button */}
      <BackButton
        href="/"
        text="Back to List"
        className="p-4 border-b border-gray-100"
      />

      {/* 2. Large Product Image */}
      <div className="relative aspect-square w-full bg-gray-50 p-12 flex items-center justify-center border-b border-gray-100">
        <img
          src={defaultImage}
          alt={item.name}
          className="object-contain max-h-full max-w-full mix-blend-multiply"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-white/90 backdrop-blur-md border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-blue-700 uppercase shadow-sm">
            {item.type}
          </span>
        </div>
      </div>

      {/* 3. Item Header & Actions */}
      <div className="px-8 py-6 bg-white flex flex-col gap-3">
        <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
          {item.name}
        </h1>
        <p className="text-green-600 font-semibold text-sm mt-1">In Stock</p>
        <div className="flex flex-col gap-3">
          <ItemButton mode="edit" id={item.id} />
          <DeleteItemButton id={item.id} itemName={item.name} />
        </div>
      </div>

      {/* 4. The Details */}
      <div className="border-t border-gray-100 divide-y divide-gray-100 bg-gray-50/30">
        <div className="px-8 py-4 grid grid-cols-3 gap-4">
          <dt className={labelClasses}>Seller</dt>
          <dd className="text-sm text-gray-900 col-span-2 font-medium">
            {item.seller}
          </dd>
        </div>

        <div className="px-8 py-4 grid grid-cols-3 gap-4">
          <dt className={labelClasses}>Category</dt>
          <dd className="text-sm text-gray-900 col-span-2">{item.type}</dd>
        </div>

        <div className="px-8 py-6 grid grid-cols-3 gap-4 items-center bg-blue-50/50">
          <dt className={labelClasses}>Price</dt>
          <dd className="text-3xl font-black text-blue-600 col-span-2">
            ${item.price.toFixed(2)}
          </dd>
        </div>
      </div>
    </div>
  );
}
