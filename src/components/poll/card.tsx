import isPollFinished from "@/lib/date/isPollFinished";
import type { Poll } from "@/types/poll";
import StatusPill, { PollStatus } from "@components/poll/status-pill";
import { UsersIcon } from "@ui/icons";
import dayjs from "dayjs";
import Link from "next/link";

type PollCard = Omit<Poll, "userId" | "updatedAt" | "description">;

function PollCard(props: PollCard) {
  const createdDate = dayjs(props.createdAt);
  const createdFormattedDate = createdDate.format("MMM D, YYYY");

  const deadlineDate = dayjs(props.endsAt);
  const deadlineFormattedDate = deadlineDate.format("MMM D, YYYY h:mm");

  const hasFinished = isPollFinished(props.endsAt);
  const status = hasFinished ? PollStatus.CLOSED : PollStatus.LIVE;

  return (
    <Link
      href={`/poll/${props.id}`}
      className="grid grid-cols-1 items-center gap-3 rounded border border-brand-surface bg-brand-mantle px-4 py-4 transition-colors hover:bg-brand-surface sm:grid-cols-3 sm:px-6 md:grid-cols-4"
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between sm:flex-col sm:items-start sm:space-y-1">
          <span className="font-semibold">{props.title}</span>
          <span className="text-sm text-gray-400">{createdFormattedDate}</span>
        </div>
        <div className="mt-4 flex items-center justify-between sm:hidden">
          <div className="flex items-center gap-1 text-gray-400">
            <UsersIcon />
            <span>{props.totalCount}</span>
          </div>
          <StatusPill status={status} />
        </div>
      </div>

      <div className="hidden text-center text-gray-300 sm:block">
        <span>{props.totalCount}</span>
      </div>

      <div className="hidden text-center text-sm text-gray-300 sm:block">
        <span>{deadlineFormattedDate}</span>
      </div>

      <div className="hidden md:flex md:justify-center">
        <StatusPill status={status} />
      </div>
    </Link>
  );
}

export default PollCard;
