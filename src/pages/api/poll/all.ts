import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.json({ message: "Method not allowed" });
  }

  const userId = await requireAuth(req, res);

  try {
    const polls = await prisma.poll.findMany({
      where: {
        userId: userId,
      },
    });

    return res.status(200).json(polls);
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
};
