import { isPollFinished } from "@/lib/dateUtilities";
import clsx from "clsx";

interface PollStatusProps {
  endDate: string;
}

const STATUS = {
  live: "bg-green-500 text-white",
  closed: "bg-red-500 text-white",
};

function PollStatus({ endDate }: PollStatusProps) {
  const hasFinished = isPollFinished(endDate);

  return (
    <div
      className={clsx(
        "flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-medium",
        STATUS[hasFinished ? "closed" : "live"],
      )}
    >
      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3"></circle>
      </svg>
      {hasFinished ? "Closed" : "Live"}
    </div>
  );
}

export default PollStatus;
