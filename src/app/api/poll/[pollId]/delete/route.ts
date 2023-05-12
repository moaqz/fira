import { getUserSession } from "@/lib/get-user-session";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(
  _request: Request,
  { params }: { params: { pollId: string } },
) {
  const session = await getUserSession();

  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const pollId = params.pollId;

  try {
    const poll = await prisma.poll.findUnique({
      where: {
        id: pollId,
      },
    });

    console.log(poll);

    if (poll == null) {
      return NextResponse.json("Poll not found", { status: 404 });
    }

    const isPollAuthor = poll.userId === session.user.id;

    if (!isPollAuthor) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    await prisma.poll.delete({
      where: {
        id: pollId,
      },
    });

    return NextResponse.json("Poll deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal Server Error", { status: 505 });
  }
}
