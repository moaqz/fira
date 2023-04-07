// Components
import Button from "@/components/Button";
import { Input, Label, TextArea } from "@components/Form";
import Stack from "@/components/Stack";
import { PollOptions } from "@components/Poll";

// React
import { useState } from "react";
import { useRouter } from "next/router";

// Lib
import type { CreatePollType } from "@/types/poll";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { NextSeo } from "next-seo";
import AppLayout from "@/layout/AppLayout";

export function addDays(days: number) {
  const result = new Date();
  result.setDate(result.getDate() + days);
  return result;
}

function Create() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePollType>({
    defaultValues: {
      options: [{ text: "" }, { text: "" }],
    },
  });

  const onSubmit = async (data: CreatePollType) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/poll/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const id = await response.json();

      router.push(`/poll/${id}`);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while creating the poll");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppLayout>
      <NextSeo title="Create a Poll" />
      <div className="sm:px-4">
        <h1 className="mx-auto my-12 max-w-xl px-4 text-center text-2xl font-semibold leading-tight">
          Complete the fields to create your poll.
        </h1>
        <form
          className="mx-auto max-w-3xl space-y-4 border border-brand-surface bg-brand-mantle p-4 sm:rounded sm:p-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack>
            <Label id="title">Title</Label>
            <Input
              id="title"
              placeholder="Type your question here"
              aria-invalid={errors.title ? "true" : "false"}
              {...register("title", {
                required: "You must include a title.",
                maxLength: {
                  value: 200,
                  message: "Title must contain a maximum of 200 characters",
                },
              })}
            />
            {errors.title?.type === "required" && (
              <p className="text-bold text-red-500">{errors.title?.message}</p>
            )}

            {errors.title?.type === "maxLength" && (
              <p className="text-bold text-red-500">{errors.title?.message}</p>
            )}
          </Stack>

          <Stack>
            <Label id="description" optional>
              Description
            </Label>
            <TextArea id="description" {...register("description")} />
          </Stack>

          <Stack>
            <Label id="end-date">Ends in</Label>
            <select
              id="end-date"
              className="w-full rounded border border-brand-surface bg-brand-crust px-4 py-3 text-brand-subtext caret-brand-mauve focus:outline-none focus:ring-1 focus:ring-brand-mauve"
              {...register("endDate")}
            >
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="15">15 minutes</option>
              <option value="20">20 minutes</option>
            </select>
          </Stack>

          <PollOptions control={control} errors={errors} register={register} />

          <Button
            variant="pink"
            className="mt-4 w-full"
            type="submit"
            isLoading={isLoading}
          >
            Create Poll
          </Button>
        </form>
      </div>
    </AppLayout>
  );
}

export default Create;
