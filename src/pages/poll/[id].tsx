import type { PollType } from "@/types/poll";
import { PollStatus, PollLink, PollOptionsList } from "@/components/Poll";

import { useRouter } from "next/router";
import LineLoader from "@/components/loader/lineLoader";
import { NextSeo } from "next-seo";
import AppLayout from "@/layout/AppLayout";
import useSWR from "swr";

function Poll() {
  const router = useRouter();
  const pollId = router.query.id as string;
  const { data, error } = useSWR<PollType>("/api/poll/" + pollId);

  if (error) router.push("/404");

  return (
    <AppLayout>
      <NextSeo title={data?.title} />
      {!data ? (
        <LineLoader text="Loading Poll Information." />
      ) : (
        <>
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
              <p className="mt-1 text-brand-subtext">
                Created by {data.user.name}
              </p>
            </footer>
          </div>

          <PollLink id={pollId} />
        </>
      )}
    </AppLayout>
  );
}

export default Poll;
