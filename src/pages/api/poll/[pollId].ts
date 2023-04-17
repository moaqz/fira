import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { requireAuth } from "@/lib/auth";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const userId = await requireAuth(req, res);
  const { pollId } = req.query;

  if (pollId == null || typeof pollId !== "string") {
    return res.status(400).json({ message: "Invalid poll id" });
  }

  const result = await prisma.poll.findUnique({
    where: { id: pollId },
    include: {
      options: {
        where: {
          pollId: pollId,
        },
        include: {
          userVotes: {
            where: { userId: userId ?? "" },
          },
        },
      },
      user: true,
    },
  });

  if (!result) {
    res.status(404).json({ message: "Poll not found" });
  }

  return res.status(200).json(result);
};
