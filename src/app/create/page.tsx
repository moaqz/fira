import { getUserSession } from "@/lib/get-user-session";
import type { Metadata } from "next";

import Header from "@ui/header";
import CreatePollForm from "@/components/poll/create-form";

export const metadata: Metadata = {
  title: "Create a Poll",
};

async function Create() {
  const session = await getUserSession();

  return (
    <>
      <Header session={session} />
      <div className="sm:px-4">
        <h1 className="mx-auto my-12 max-w-xl px-4 text-center text-2xl font-semibold leading-tight">
          Complete the fields to create your poll.
        </h1>
        <CreatePollForm />
      </div>
    </>
  );
}

export default Create;
