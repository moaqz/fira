export async function VotePollOption({
  pollId,
  pollOptionId,
}: {
  pollId: string;
  pollOptionId: string;
}) {
  const res = await fetch("/api/vote-poll-option", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pollId,
      pollOptionId,
    }),
  });

  return res.json();
}
