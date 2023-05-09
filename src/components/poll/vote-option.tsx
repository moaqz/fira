import { VotePollOption } from "@/services/vote-poll-option";
import { PollOption } from "@/types/poll";
import { useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import { useState } from "react";
import { toast } from "sonner";

type PollVoteOption = {
  disabled: boolean;
  totalVotes: number;
} & PollOption;

function PollVoteOption({
  text,
  pollId,
  totalCount,
  userVotes,
  id,
  disabled,
  totalVotes,
}: PollVoteOption) {
  const [hasVotedOption, setHasVotedOption] = useState(
    userVotes[0]?.pollOptionId === id,
  );

  const percent = totalCount ? Math.round((totalCount * 100) / totalVotes) : 0;
  const queryClient = useQueryClient();

  const handleVote = async () => {
    if (hasVotedOption) return;

    setHasVotedOption(true);

    try {
      await VotePollOption({ pollId, pollOptionId: id });

      toast.success("Vote added successfully!");
      queryClient.invalidateQueries({ queryKey: ["poll"] });
    } catch (error) {
      toast.error("An error occurred while adding your vote");
      setHasVotedOption(false);
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

export default PollVoteOption;
