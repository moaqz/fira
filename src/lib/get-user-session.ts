import { getServerSession } from "next-auth";
import { authOptions } from "@/config/nextauth";

export async function getUserSession() {
  const session = await getServerSession(authOptions);

  return session;
}
