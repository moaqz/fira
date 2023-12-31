import clsx from "clsx";

const STATUS = {
  live: "bg-green-800 text-white",
  closed: "bg-red-700 text-white",
};

export enum PollStatus {
  CLOSED = "closed",
  LIVE = "live",
}

function StatusPill({ status }: { status: "closed" | "live" }) {
  const statusText = status === PollStatus.CLOSED ? "Closed" : "Live";

  return (
    <span
      className={clsx(
        "flex w-24 flex-grow-0 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
        STATUS[status],
      )}
    >
      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3" />
      </svg>
      {statusText}
    </span>
  );
}

export default StatusPill;
