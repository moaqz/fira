import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";

// requireAuth returns the user's ID if the session exists.
// If the session does not exist or the user is not authenticated, the function returns an error response.
export async function requireAuth(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userId = session.user?.id;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized " });
  }

  return userId;
}
