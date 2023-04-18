import generateEndDate from "./generateEndDate";
import isPollFinished from "./isPollFinished";

describe("isPollFinished", () => {
  it("Returns true if poll has finished", () => {
    const endTime = "2023-04-17T15:03:42.493Z";

    const hasFinished = isPollFinished(endTime);
    expect(hasFinished).toBeTruthy();
  });

  it("Returns false if poll has not yet finished", () => {
    const endTime = new Date(Date.now() + 3600000).toISOString();

    const hasFinished = isPollFinished(endTime);
    expect(hasFinished).toBeFalsy();
  });
});

describe("generateEndDate", () => {
  it("Should return a valid end date for 5 minutes", () => {
    const endDate = generateEndDate("5");
    const expectedEndDate = new Date(Date.now() + 5 * 60 * 1000);

    expect(endDate).toEqual(expectedEndDate);
  });

  it("Should return a valid end date for 20 minutes", () => {
    const endDate = generateEndDate("20");
    const expectedEndDate = new Date(Date.now() + 20 * 60 * 1000);

    expect(endDate).toEqual(expectedEndDate);
  });
});
