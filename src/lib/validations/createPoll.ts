import { z } from "zod";

export const CreatePollSchema = z.object({
  description: z.string().optional(),
  title: z
    .string()
    .min(1, { message: "You must include a title." })
    .max(200, { message: "Title must contain a maximum of 200 characters." }),
  endDate: z.union([z.string().nonempty(), z.date()]),
  options: z
    .array(
      z.object({
        text: z.string().nonempty(),
      }),
    )
    .min(2, { message: "You must include at least two options." }),
});

export type CreatePoll = z.infer<typeof CreatePollSchema>;
