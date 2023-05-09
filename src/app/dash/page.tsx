import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import type { Metadata } from "next";

import Header from "@ui/header";
import { Link } from "@/components/Link";
import { Plus } from "@/components/Icons";
import PollFeed from "@/components/poll/poll-feed";

export const metadata: Metadata = {
  title: "Dashboard - Fira",
};

async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Header session={session} />
      <div className="mx-auto mt-12 max-w-screen-2xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <Link href="/create" variant="pink">
            <Plus /> <span>Create poll</span>
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
    </>
  );
}

export default Dashboard;
