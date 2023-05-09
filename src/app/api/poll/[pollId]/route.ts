import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getUserSession } from "@/lib/get-user-session";

export async function GET(
  _request: Request,
  { params }: { params: { pollId: string } },
) {
  const session = await getUserSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const poll = await prisma.poll.findUnique({
      where: { id: params.pollId },
      include: {
        options: {
          where: {
            pollId: params.pollId,
          },
          include: {
            userVotes: {
              where: { userId: session.user.id },
            },
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    if (!poll) {
      return NextResponse.json({ message: "Poll not found" }, { status: 404 });
    }

    return NextResponse.json(poll);
  } catch (error) {
    return NextResponse.json("Internal server error", { status: 500 });
  }
}
