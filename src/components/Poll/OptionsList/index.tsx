import { OptionType } from "@/types/poll";
import { PollOptionVote } from "@/components/Poll";

import { useState } from "react";
import { isPollFinished } from "@/lib/dateUtilities";

interface PollOptionsListProps {
  endsAt: string;
  options: OptionType[];
}

function PollOptionsList({ endsAt, options }: PollOptionsListProps) {
  const [hasVoted, setHasVoted] = useState<boolean>(() =>
    options.some((option) => option.userVotes.length > 0),
  );

  const totalVotes = options.reduce((a, b) => a + b.totalCount, 0);
  const hasEnded = isPollFinished(endsAt);

  return (
    <div className="flex flex-col gap-3">
      {options?.map((option) => {
        return (
          <PollOptionVote
            key={option.id}
            id={option.id}
            text={option.text}
            totalCount={option.totalCount}
            pollId={option.pollId}
            userVotes={option.userVotes}
            disabled={hasVoted || hasEnded}
            totalVotes={totalVotes}
            setHasVoted={setHasVoted}
          />
        );
      })}
    </div>
  );
}

export default PollOptionsList;
