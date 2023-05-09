export async function GetPollById(pollId: string) {
  const res = await fetch(`/api/poll/${pollId}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}
