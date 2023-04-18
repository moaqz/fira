/**
 Generates an end date for a poll based on the selected duration.
 @param duration The duration of the poll in minutes (e.g., "5", "10", "15", "20").
*/
export default function generateEndDate(endDate: string) {
  const endTime = Date.now() + parseInt(endDate) * 60 * 1000;

  return new Date(endTime);
}
