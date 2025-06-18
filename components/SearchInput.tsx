"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/utils";

const SearchInput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("topic") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = searchParams.toString();
      let newUrl = null;

      if (!searchQuery) {
        newUrl = removeKeysFromUrlQuery({ params, keysToRemove: ["topic"] });
      } else {
        newUrl = formUrlQuery({ params, key: "topic", value: searchQuery });
      }

      if (newUrl) {
        router.push(newUrl, { scroll: false });
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery, router, searchParams, pathname]);

  return (
    <div className="relative flex h-9 w-full items-center gap-2 rounded-md border border-black px-3 py-2 min-lg:min-w-80">
      <Image src="/icons/search.svg" alt="search" width={15} height={15} />
      <input
        type="text"
        placeholder="Search companions ..."
        className="w-full text-sm outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
export default SearchInput;
