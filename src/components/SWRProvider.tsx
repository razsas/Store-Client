"use client";

import { SWRConfig } from "swr";
import { getItems, getItem } from "../utils/utils";

export default function SWRProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SWRConfig
      value={{
        fetcher: (key: string | [string, string]) => {
          if (Array.isArray(key)) {
            const [resource, id] = key;
            if (resource === "items" && id) {
              return getItem(id);
            }
          }
          if (key === "items") {
            return getItems();
          }
          throw new Error(`Unknown SWR key: ${key}`);
        },
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      }}
    >
      {children}
    </SWRConfig>
  );
}
