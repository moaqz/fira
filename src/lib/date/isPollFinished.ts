// Checks if the poll has finished based on the specified end time.
export default function isPollFinished(endTime: string) {
  const endTimestamp = new Date(endTime).getTime();
  const currentTimestamp = Date.now();

  return currentTimestamp >= endTimestamp;
}
