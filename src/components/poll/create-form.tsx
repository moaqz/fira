"use client";

import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { Button } from "@ui/index";
import FormValidation from "@components/errors/form-validation";
import PollOptions from "@components/poll/create-form-options";
import { Input, Label, TextArea } from "@ui/index";
import { createPoll } from "@/services/create-poll";
import generateEndDate from "@/lib/date/generateEndDate";
import {
  CreatePollSchema,
  type CreatePoll,
} from "@/lib/validations/createPoll";

function CreatePollForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    reset,
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
      const id = await createPoll({ ...data, endDate: endDate });

      reset();
      router.push(`/poll/${id}`);
    } catch (error) {
      setIsLoading(false);
      toast.error("An error occurred while creating the poll.");
    }
  };

  return (
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
          <FormValidation>{errors.title?.message}</FormValidation>
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
  );
}

export default CreatePollForm;