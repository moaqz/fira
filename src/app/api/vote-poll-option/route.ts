import isPollFinished from "@/lib/date/isPollFinished";
import { getUserSession } from "@/lib/get-user-session";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await getUserSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { pollId, pollOptionId } = await request.json();

  if (pollId == null || pollOptionId == null) {
    return NextResponse.json(
      {
        message: "Invalid pollId or pollOptionId",
      },
      { status: 400 },
    );
  }

  const poll = await prisma.poll.findUnique({
    where: { id: pollId },
  });

  if (!poll) {
    return NextResponse.json(
      {
        message: "Poll not found",
      },
      { status: 404 },
    );
  }

  // Verify that post is still going on.
  // @ts-ignore
  const hasFinished = isPollFinished(poll.endsAt);

  if (hasFinished) {
    return NextResponse.json({ message: "Poll has ended." }, { status: 500 });
  }

  try {
    await prisma.$transaction([
      prisma.pollOptionVote.create({
        data: {
          pollId,
          userId: session.user.id,
          pollOptionId,
        },
      }),

      prisma.pollOption.update({
        where: { id: pollOptionId },
        data: {
          totalCount: { increment: 1 },
        },
      }),

      prisma.poll.update({
        where: { id: pollId },
        data: {
          totalCount: { increment: 1 },
        },
      }),
    ]);

    return NextResponse.json({ message: "Vote added" });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Unable to vote on poll at this time.",
      },
      { status: 500 },
    );
  }
}
