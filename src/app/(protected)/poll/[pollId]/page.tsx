import { notFound } from "next/navigation";

import PollPreview from "@components/poll/preview";

async function Page({ params }: { params: { pollId: string } }) {
  const pollId = params.pollId;

  if (!pollId || typeof pollId !== "string") {
    return notFound();
  }

  return <PollPreview pollId={pollId} />;
}

export default Page;
