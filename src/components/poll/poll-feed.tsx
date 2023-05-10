"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { GetPolls } from "@/services/get-polls";
import type { Poll } from "@/types/poll";
import PollCard from "@components/poll/card";
import { ExclamationTriangleIcon } from "@ui/icons";
import LineLoader from "@/components/loader/lineLoader";
import { Button } from "@ui/index";

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

  const polls = data?.pages.flatMap((poll) => poll.polls);

  if (isLoading) {
    return <LineLoader text="Fetching data..." />;
  }

  return (
    <div className="mb-20 space-y-4">
      {!isFetching && isError && (
        <div className="mt-4 flex items-center justify-center space-x-3 rounded border border-red-300 p-4 text-red-300">
          <ExclamationTriangleIcon />
          <span className="text-lg">Error fetching data</span>
        </div>
      )}

      {polls && polls.length > 0 ? (
        polls.map((poll) => {
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
        })
      ) : (
        <p className="mt-4 text-center text-lg font-semibold text-gray-400">
          You have not created any polls yet.
        </p>
      )}

      {hasNextPage && !isFetching && !isError && (
        <Button className="w-full" onClick={() => fetchNextPage()}>
          Load more
        </Button>
      )}

      {!isFetching && !isError && !hasNextPage && polls && polls.length > 0 && (
        <p className="mt-4 text-center text-lg font-semibold text-gray-400">
          You{"'"}ve reached the end of the list.
        </p>
      )}
    </div>
  );
}

export default PollFeed;
