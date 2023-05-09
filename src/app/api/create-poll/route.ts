import { CreatePollSchema } from "@/lib/validations/createPoll";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const { title, description, options, endDate } = await request.json();
  const { success } = CreatePollSchema.safeParse({
    title,
    description,
    options,
    endDate,
  });

  if (success === false) {
    return NextResponse.json("Bad request", { status: 400 });
  }

  try {
    const { id } = await prisma.poll.create({
      data: {
        title,
        description,
        userId: session.user.id,
        endsAt: endDate,

        options: {
          create: options,
        },
      },
    });

    return NextResponse.json({ message: "Poll created ", id }, { status: 201 });
  } catch (error) {
    return NextResponse.json("Internal Server Error", { status: 505 });
  }
}
