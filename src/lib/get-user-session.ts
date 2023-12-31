import { authOptions } from "@/config/nextauth";
import { getServerSession } from "next-auth";

export async function getUserSession() {
  const session = await getServerSession(authOptions);

  return session;
}
