"use client";

import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { GetPollById } from "@/services/get-poll-by-id";
import StatusPill, { PollStatus } from "./status-pill";
import PollShareLink from "./share-link";
import LineLoader from "@components/loader/lineLoader";
import { PollInfo } from "@/types/poll";
import PollVoteOption from "./vote-option";

dayjs.extend(relativeTime);

function PollPreview({ pollId }: { pollId: string }) {
  const { data, isError, isLoading, isRefetching, isFetching, error } =
    useQuery<PollInfo>({
      queryKey: ["poll"],
      queryFn: () => GetPollById(pollId),
      refetchOnWindowFocus: false,
    });

  if (isLoading || isRefetching || isFetching) {
    return <LineLoader text="Loading Poll Information." />;
  }

  if (isError || error || !data) {
    notFound();
  }

  const hasVoted = data.options.some((option) => option.userVotes.length > 0);
  const closedAgo = data.hasFinished && dayjs(data.endsAt).fromNow();
  const closedIn = !data.hasFinished && dayjs(data.endsAt).toNow();

  return (
    <div>
      <div className="mx-auto mt-12 max-w-3xl space-y-6 border border-brand-surface bg-brand-mantle p-4 sm:rounded sm:p-6">
        <header className="flex flex-col justify-between gap-4 sm:flex-row">
          <div className="order-1 flex flex-1 flex-col sm:-order-1">
            <h1 className="text-xl">{data.title}</h1>
            <p className="text-brand-subtext">{data.description}</p>
          </div>
          <StatusPill
            status={data.hasFinished ? PollStatus.CLOSED : PollStatus.LIVE}
          />
        </header>

        <div className="flex flex-col gap-3">
          {data.options.map((option) => {
            return (
              <PollVoteOption
                key={option.id}
                id={option.id}
                text={option.text}
                totalCount={option.totalCount}
                pollId={option.pollId}
                userVotes={option.userVotes}
                disabled={data.hasFinished || hasVoted}
                totalVotes={data.totalCount}
              />
            );
          })}
        </div>

        <footer className="flex items-center justify-between text-gray-400">
          <span>Created by {data.user.name}</span>
          {data.hasFinished ? (
            <span className="text-sm">Voting closed {closedAgo}.</span>
          ) : (
            <span className="text-sm">Voting ends in {closedIn}.</span>
          )}
        </footer>
      </div>

      <PollShareLink pollId={pollId} />
    </div>
  );
}

export default PollPreview;
