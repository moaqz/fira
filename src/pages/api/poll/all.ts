import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") return res.json({ message: "Method not allowed" });

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).send({ message: "Unauthorize." });
  }

  const userId = session.user?.id;

  if (!userId) {
    return res.status(401).send({ message: "You must be signed in." });
  }

  try {
    const polls = await prisma.poll.findMany({
      where: {
        userId: userId,
      },
    });

    return res.json(polls);
  } catch (error) {
    console.error("Failed to get polls", error);
    return res.status(500).json("Internal Server Error");
  }
};
