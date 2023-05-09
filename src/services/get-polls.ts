export async function GetPolls({ pageParam }: { pageParam?: string }) {
  const nextCursor = pageParam != null;

  const URL = nextCursor
    ? `http://localhost:3000/api/get-polls?cursor=${pageParam}`
    : "http://localhost:3000/api/get-polls";

  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Error fetching data.");
  }

  return res.json();
}
