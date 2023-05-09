// Generates an end date for a poll based on the selected duration.
export default function generateEndDate(endDate: string) {
  const endTime = Date.now() + parseInt(endDate) * 60 * 1000;

  return new Date(endTime);
}
