import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";
import isPollFinished from "@/lib/date/isPollFinished";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const userId = await requireAuth(req, res);
  const { pollId, pollOptionId } = req.body;

  if (pollId == null || pollOptionId == null) {
    return res.status(400).json({
      message: "Invalid pollId or pollOptionId",
    });
  }

  const poll = await prisma.poll.findUnique({
    where: { id: pollId },
  });

  if (!poll) {
    return res.status(404).json({
      message: "Poll not found",
    });
  }

  // Verify that post is still going on.
  const hasFinished = isPollFinished(poll.endsAt);

  if (hasFinished) {
    return res.status(500).json({ message: "Poll has ended." });
  }

  try {
    await prisma.$transaction([
      prisma.pollOptionVote.create({
        data: {
          pollId,
          userId,
          pollOptionId,
        },
      }),

      prisma.pollOption.update({
        where: { id: pollOptionId },
        data: {
          totalCount: { increment: 1 },
        },
      }),
    ]);

    return res.status(200).json({ message: "Vote added" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Unable to vote on poll at this time." });
  }
};
