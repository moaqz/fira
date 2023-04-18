import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";
import { CreatePollSchema } from "@/lib/validations/createPoll";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.json({ message: "Method not allowed" });
  }

  const userId = await requireAuth(req, res);
  
  const { title, description, options, endDate } = req.body;
  const { success } = CreatePollSchema.safeParse({
    title,
    description,
    options,
    endDate,
  });

  if (success === false) {
    return res.status(400).json({ message: "Bad request" });
  }

  try {
    const { id } = await prisma.poll.create({
      data: {
        title,
        description,
        userId,
        endsAt: endDate,

        options: {
          create: options,
        },
      },
    });

    return res.status(201).json({ message: "Poll created ", id });
  } catch (error) {
    console.error("Failed to create poll", error);
    return res.status(500).json("Internal Server Error");
  }
};
