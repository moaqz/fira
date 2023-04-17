// Checks if the poll has finished based on the specified end time.
export const isPollFinished = (endTime: string) => {
  const endTimestamp = new Date(endTime).getTime();
  const currentTimestamp = Date.now();

  return currentTimestamp >= endTimestamp;
};

/**
 Generates an end date for a poll based on the selected duration.
 @param duration The duration of the poll in minutes (e.g., "5", "10", "15", "20").
*/
export function generateEndDate(endDate: string) {
  const endTime = Date.now() + parseInt(endDate) * 60 * 1000;

  return new Date(endTime);
}
