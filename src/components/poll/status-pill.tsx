import clsx from "clsx";

const STATUS = {
  live: "bg-green-500 text-white",
  closed: "bg-red-500 text-white",
};

export enum PollStatus {
  "CLOSED" = "closed",
  "LIVE" = "live",
}

function StatusPill({ status }: { status: "closed" | "live" }) {
  return (
    <div
      className={clsx(
        "flex w-24 flex-grow-0 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
        STATUS[status],
      )}
    >
      <svg className="h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3"></circle>
      </svg>
      {status === PollStatus.CLOSED ? "Closed" : "Live"}
    </div>
  );
}

export default StatusPill;
