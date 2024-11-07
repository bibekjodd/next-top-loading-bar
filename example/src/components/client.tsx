'use client';
import { ProgressButton } from '@jodd/next-top-loading-bar';
import { useMemo, useState } from 'react';

export default function Client() {
  const [search, setSearch] = useState('elon');
  const [country, setCountry] = useState('USA');

  const nextRoute = useMemo(() => {
    if (typeof window === 'undefined') return '/';
    const url = new URL(location.href);
    url.search = '';
    if (search !== '') url.searchParams.set('search', search);
    if (country !== '') url.searchParams.set('country', country);
    return url.href;
  }, [country, search]);

  return (
    <div className="mt-10 flex flex-col items-start space-y-2">
      <h3 className="mb-2">Client Componetnt</h3>
      <div className="flex flex-col space-y-1 text-base">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-9 w-40 rounded-md border-2 border-gray-500 px-2 text-gray-700 focus:outline-none"
        />
      </div>

      <div className="flex flex-col space-y-1 text-base">
        <label htmlFor="search">Country</label>
        <input
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="h-9 w-40 rounded-md border-2 border-gray-500 px-2 text-gray-700 focus:outline-none"
        />
      </div>

      <ProgressButton
        href={nextRoute}
        className="h-9 rounded-lg bg-gradient-to-b from-sky-500 to-sky-700/80 px-6 text-sm text-white transition-all active:scale-95"
      >
        Apply Search Params
      </ProgressButton>
      <p className="text-xs">Apply route: {nextRoute}</p>
    </div>
  );
}
