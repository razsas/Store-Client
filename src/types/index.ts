export interface Item {
  id: string;
  name: string;
  type: string;
  seller: string;
  price: number;
}

export interface SearchParams {
  q?: string;
  type?: string;
  sortBy?: SortOption;
}

export type SortOption = "price_asc" | "price_desc" | "name";

export const SORT_OPTIONS = {
  PRICE_ASC: "price_asc",
  PRICE_DESC: "price_desc",
  NAME: "name",
} as const;

export type ItemButtonMode = "add" | "edit";

export const ITEM_BUTTON_MODES = {
  ADD: "add",
  EDIT: "edit",
} as const;

export const ITEM_TYPES = {
  ELECTRONICS: "Electronics",
  CLOTHING: "Clothing",
  BOOKS: "Books",
  HOME: "Home",
  OTHER: "Other",
} as const;

export type CreateItemPayload = {
  name: string;
  seller: string;
  type: string;
  price: number;
};

export type UpdateItemPayload = CreateItemPayload;
