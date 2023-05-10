import { BASE_URL } from "@lib/constants";

export async function GetPolls({ pageParam }: { pageParam?: string }) {
  const nextCursor = pageParam != null;

  const URL = nextCursor
    ? `${BASE_URL}/api/get-polls?cursor=${pageParam}`
    : `${BASE_URL}/api/get-polls`;

  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Error fetching data.");
  }

  return res.json();
}
