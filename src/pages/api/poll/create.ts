import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { generateEndDate } from "@/lib/dateUtilities";
import { requireAuth } from "@/lib/auth";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.json({ message: "Method not allowed" });
  }

  const userId = await requireAuth(req, res);

  // TODO: add validations
  const { title, description, options, endDate } = req.body;

  try {
    const { id } = await prisma.poll.create({
      data: {
        title,
        description,
        userId,
        endsAt: generateEndDate(endDate),

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
