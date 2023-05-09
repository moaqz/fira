"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { GetPolls } from "@/services/get-polls";
import type { Poll } from "@/types/poll";
import PollCard from "@components/poll/card";
import { ExclamationTriangleIcon } from "@ui/icons";
import LineLoader from "@/components/loader/lineLoader";
import Button from "@components/Button";

function PollFeed() {
  const { data, isLoading, fetchNextPage, isFetching, isError, hasNextPage } =
    useInfiniteQuery<{
      nextCursor?: string;
      polls: Poll[];
    }>(["polls"], GetPolls, {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 3,
    });

  const polls = data?.pages.flatMap((poll) => poll.polls) ?? [];

  return (
    <div className="space-y-4">
      {!isLoading && !isFetching && isError && (
        <div className="mt-4 flex items-center justify-center space-x-3 rounded border border-red-300 p-4 text-red-300">
          <ExclamationTriangleIcon />
          <span className="text-lg">Error fetching data</span>
        </div>
      )}

      {isLoading && <LineLoader text="Fetching data..." />}

      {polls.map((poll) => {
        return (
          <PollCard
            key={poll.id + poll.title}
            title={poll.title}
            id={poll.id}
            totalCount={poll.totalCount}
            createdAt={poll.createdAt}
            endsAt={poll.endsAt}
          />
        );
      })}

      {hasNextPage && !isFetching && !isError && (
        <Button className="w-full" onClick={() => fetchNextPage()}>
          Load more
        </Button>
      )}

      {!isFetching && !isError && !hasNextPage && (
        <p className="text-center font-semibold text-gray-400">
          You{"'"}ve reached the end of the list
        </p>
      )}
    </div>
  );
}

export default PollFeed;
