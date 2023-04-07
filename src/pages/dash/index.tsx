import { Input } from "@/components/Form";
import { Plus, ErrorTriangle } from "@/components/Icons";
import { Link } from "@/components/Link";
import AppLayout from "@/layout/AppLayout";
import Head from "next/head";
import { useEffect, useState } from "react";
import LineLoader from "@components/Loaders/LineLoader";

import { PollType } from "@/types/poll";
import { PollCard } from "@/components/Poll";
export type Poll = Omit<PollType, "options" | "user">;

function Dash() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Poll[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch("/api/poll/all")
      .then((res) => res.json())
      .then((polls) => {
        setData(polls);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <AppLayout>
      <Head>
        <title>Dashboard - Fira</title>
      </Head>

      <div className="mx-auto mt-12 max-w-screen-2xl px-4">
        <h1 className="mb-4 text-3xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-5">
          <Input
            value={query}
            placeholder="Search..."
            onChange={handleSearch}
          />
          <Link href="/create" variant="pink">
            <Plus /> <span className="hidden sm:block">Create poll</span>
          </Link>
        </div>

        {loading && <LineLoader text="Fetching data..." />}

        {error && (
          <div className="mt-4 flex items-center justify-center space-x-3 rounded border border-red-300 p-4 text-red-300">
            <ErrorTriangle />
            <span className="text-lg">Error fetching data</span>
          </div>
        )}

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {data &&
            data.length > 0 &&
            data
              .filter((poll: Poll) => poll.title.toLowerCase().includes(query)) // filter polls based on search query
              .map((poll: Poll) => <PollCard {...poll} />)}
        </div>
      </div>
    </AppLayout>
  );
}

export default Dash;
