import { describe, it, expect } from "vitest";
import { CreatePollSchema } from "./createPoll";

describe("CreatePollSchema", () => {
  it("Valid poll should pass validation", () => {
    const poll = {
      description: "This is a valid poll",
      title: "Poll title",
      endDate: "5",
      options: [{ text: "Option 1" }, { text: "Option 2" }],
    };

    const { success } = CreatePollSchema.safeParse(poll);

    expect(success).toBeTruthy();
  });

  it("poll with missing title should fail validation", () => {
    const poll = {
      title: "",
      description: "This poll is missing a title",
      endDate: "20",
      options: [{ text: "Option 1" }, { text: "Option 2" }],
    };

    const { success } = CreatePollSchema.safeParse(poll);

    expect(success).toBeFalsy();
  });

  it("poll with less than two options should fail validation", () => {
    const poll = {
      description: "This poll has only one option",
      title: "Poll title",
      endDate: "20",
      options: [{ text: "Option 1" }],
    };

    const { success } = CreatePollSchema.safeParse(poll);

    expect(success).toBeFalsy();
  });
});
