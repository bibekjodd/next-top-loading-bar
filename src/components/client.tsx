"use client";
import { ProgressButton } from "@/lib";
import { useMemo, useState } from "react";

export default function Client() {
  const [search, setSearch] = useState("elon");
  const [country, setCountry] = useState("USA");

  const nextRoute = useMemo(() => {
    const url = new URL(location.href);
    url.search = "";
    if (search !== "") url.searchParams.set("search", search);
    if (country !== "") url.searchParams.set("country", country);
    return url.href;
  }, [country, search]);

  return (
    <div className="flex flex-col mt-10 space-y-2 items-start">
      <h3 className="mb-2">Client Componetnt</h3>
      <div className="flex flex-col space-y-1 text-base">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-gray-500 focus:outline-none w-40 rounded-md h-9 px-2 text-gray-700"
        />
      </div>

      <div className="flex flex-col space-y-1 text-base">
        <label htmlFor="search">Country</label>
        <input
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border-2 border-gray-500 focus:outline-none w-40 rounded-md h-9 px-2 text-gray-700"
        />
      </div>

      <ProgressButton
        href={nextRoute}
        className="h-9 px-6 text-sm  rounded-lg bg-gradient-to-b from-sky-500 to-sky-700/80 active:scale-95 transition-all text-white"
      >
        Apply Search Params
      </ProgressButton>
      <p className="text-xs">Apply route: {nextRoute}</p>
    </div>
  );
}
