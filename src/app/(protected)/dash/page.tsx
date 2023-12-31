import type { Metadata } from "next";

import PollFeed from "@/components/poll/poll-feed";
import { PlusIcon } from "@ui/icons";
import { Link } from "@ui/index";

export const metadata: Metadata = {
  title: "Dashboard - Fira",
};

async function Dashboard() {
  return (
    <div className="mx-auto mt-12 max-w-screen-2xl px-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Link href="/create" variant="pink">
          <PlusIcon /> <span>Create poll</span>
        </Link>
      </div>

      <div className="mt-3 grid grid-cols-1 items-center justify-between gap-3 p-4 font-medium text-zinc-300 sm:grid-cols-3 sm:p-3 md:grid-cols-4">
        <div>Polls</div>
        <div className="hidden text-center sm:block">Participants</div>
        <div className="hidden text-center sm:block">Deadline</div>
        <div className="hidden text-center md:block">Status</div>
      </div>

      <PollFeed />
    </div>
  );
}

export default Dashboard;
