import { Header } from "@ui/index";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import PollPreview from "@components/poll/preview";

async function Page({ params }: { params: { pollId: string } }) {
  const session = await getServerSession(authOptions);
  const pollId = params.pollId;

  return (
    <>
      <Header session={session} />
      <PollPreview pollId={pollId} />
    </>
  );
}

export default Page;
