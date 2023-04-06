import type { PollType } from "@/types/poll";
import { PollStatus, PollLink, PollOptionsList } from "@/components/Poll";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LineLoader from "@/components/Loaders/LineLoader";
import { NextSeo } from "next-seo";

function Poll() {
  const router = useRouter();
  const pollId = router.query.id;

  const [data, setData] = useState<PollType | null>(null);

  useEffect(() => {
    if (!pollId) {
      return;
    }

    const fetchData = async () => {
      const response = await fetch(`/api/poll/${pollId}`);

      if (!response.ok) {
        router.push("/404");
      }

      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [pollId]);

  if (!data) {
    return <LineLoader text="Loading Poll Information." />;
  }

  return (
    <>
      <NextSeo title={data.title} />
      <div className="mx-auto mt-12 max-w-3xl space-y-6 border border-brand-surface bg-brand-mantle p-4 sm:rounded sm:p-6">
        <header className="flex flex-col justify-between gap-4 sm:flex-row">
          <div className="order-1 flex flex-1 flex-col sm:-order-1">
            <h1 className="text-xl">{data?.title}</h1>
            <p className="text-brand-subtext">{data.description}</p>
          </div>
          <PollStatus endDate={data?.endsAt} />
        </header>
        <PollOptionsList endsAt={data.endsAt} options={data.options} />
        <footer>
          <p className="mt-1 text-brand-subtext">Created by {data.user.name}</p>
        </footer>
      </div>

      <PollLink id={pollId as string} />
    </>
  );
}

export default Poll;
