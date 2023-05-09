import { OptionType } from "@/types/poll";
import clsx from "clsx";
import { useState } from "react";
import { toast } from "sonner";

interface PollOptionVoteProps extends OptionType {
  disabled: boolean;
  totalVotes: number;
  setHasVoted: (hasVoted: boolean) => void;
}

function PollOptionVote({
  text,
  totalCount,
  pollId,
  id,
  userVotes,
  disabled,
  totalVotes,
  setHasVoted,
}: PollOptionVoteProps) {
  const [hasVotedOption, setHasVotedOption] = useState(
    userVotes[0]?.pollOptionId === id,
  );
  const percent = totalCount ? Math.round((totalCount * 100) / totalVotes) : 0;

  const handleVote = async () => {
    setHasVotedOption(true);
    setHasVoted(true);

    try {
      const response = await fetch("/api/poll/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pollId,
          pollOptionId: id,
        }),
      });

      if (!response.ok) {
        throw new Error();
      }

      toast.success("Vote added successfully!");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding your vote");
      setHasVotedOption(false);
      setHasVoted(false);
    }
  };

  return (
    <button
      className={clsx(
        "flex items-center justify-between gap-2 rounded border border-brand-surface px-3 py-2.5",
        hasVotedOption ? "bg-brand-surface" : "bg-brand-crust",
      )}
      onClick={handleVote}
      disabled={hasVotedOption || disabled}
    >
      <p className="text-zinc-200">{text}</p>
      <p className="text-sm text-zinc-400">
        {percent}% ({totalCount} votes)
      </p>
    </button>
  );
}

export default PollOptionVote;
