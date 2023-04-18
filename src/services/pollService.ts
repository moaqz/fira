import { CreatePoll } from "@/lib/validations/createPoll";

// Creates a new poll using the given data, and returns the ID of the newly created poll.
export const createPoll = async (data: CreatePoll) => {
  try {
    const response = await fetch("/api/poll/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create poll");
    }

    const { id } = await response.json();

    return id;
  } catch (error) {
    throw new Error("Failed to create poll");
  }
};
