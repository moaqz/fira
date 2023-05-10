import { Header } from "@ui/index";
import PollPreview from "@components/poll/preview";
import { getUserSession } from "@/lib/get-user-session";


async function Page({ params }: { params: { pollId: string } }) {
  const session = await getUserSession();
  const pollId = params.pollId;

  return (
    <>
      <Header session={session} />
      <PollPreview pollId={pollId} />
    </>
  );
}

export default Page;
