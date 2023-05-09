import { CreatePoll } from "@/lib/validations/createPoll";

export const createPoll = async (data: CreatePoll) => {
  try {
    const response = await fetch("/api/create-poll", {
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
