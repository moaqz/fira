import Button from "@/components/Button";
import { Input, Label, TextArea, ErrorMessage } from "@components/Form";
import { PollOptions } from "@components/Poll";
import AppLayout from "@/layout/AppLayout";

import { useState } from "react";
import { useRouter } from "next/router";

import {
  CreatePollSchema,
  type CreatePoll,
} from "@/lib/validations/createPoll";

import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPoll } from "@/services/pollService";
import generateEndDate from "@/lib/date/generateEndDate";
import Head from "next/head";

function Create() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePoll>({
    defaultValues: {
      options: [{ text: "" }, { text: "" }],
    },
    resolver: zodResolver(CreatePollSchema),
  });

  const onSubmit: SubmitHandler<CreatePoll> = async (data) => {
    setIsLoading(true);

    try {
      const endDate = generateEndDate(data.endDate as string);

      const id = await createPoll({
        ...data,
        endDate: endDate,
      });

      router.push(`/poll/${id}`);
    } catch (error) {
      setIsLoading(false);
      toast.error("An error occurred while creating the poll");
    }
  };

  return (
    <AppLayout>
      <Head>
        <title>Create a Poll</title>
      </Head>
      <div className="sm:px-4">
        <h1 className="mx-auto my-12 max-w-xl px-4 text-center text-2xl font-semibold leading-tight">
          Complete the fields to create your poll.
        </h1>
        <form
          className="mx-auto max-w-3xl space-y-4 border border-brand-surface bg-brand-mantle p-4 sm:rounded sm:p-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <Label id="title">Title</Label>
            <Input
              id="title"
              placeholder="Type your question here"
              aria-invalid={errors.title ? "true" : "false"}
              {...register("title")}
            />
            {errors.title && (
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label id="description" optional>
              Description
            </Label>
            <TextArea id="description" {...register("description")} />
          </div>

          <div className="flex flex-col gap-2">
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
          </div>

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
