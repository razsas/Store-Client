export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3002/api/v1";

export const NAME_SELLER_REGEX = /^[a-zA-Z0-9 ]{3,30}$/;
export const PRICE_REGEX = /^\d+(\.\d{1,2})?$/;
