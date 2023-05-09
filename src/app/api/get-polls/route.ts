import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserSession } from "@/lib/get-user-session";

export async function GET(request: Request) {
  const session = await getUserSession();

  if (!session) {
    return NextResponse.json("Unauthorized", { status: 404 });
  }

  const { searchParams } = new URL(request.url);
  const cursor = searchParams.get("cursor");
  const hasNextCursor = cursor != null;

  try {
    const polls = await prisma.poll.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        id: "desc",
      },
      cursor: hasNextCursor ? { id: cursor } : undefined,
      skip: hasNextCursor ? 1 : 0,
      take: 10,
    });

    let nextCursor = null;
    if (polls.length > 0) {
      nextCursor = polls[polls.length - 1].id;
    }

    return NextResponse.json({
      polls,
      nextCursor,
    });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
