import {
  Control,
  FieldErrors,
  UseFormRegister,
  useFieldArray,
} from "react-hook-form";

import type { CreatePoll } from "@/lib/validations/createPoll";
import PollOption from "@components/poll/create-form-option";
import { PlusIcon } from "@ui/icons";
import { Button } from "@ui/index";

function PollOptions({
  control,
  register,
  maxOptions = 5,
  errors,
}: {
  control: Control<CreatePoll>;
  errors: FieldErrors<CreatePoll>;
  register: UseFormRegister<CreatePoll>;
  maxOptions?: number;
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-brand-subtext">Options</p>
        {fields?.map((field, index) => {
          return (
            <PollOption
              index={index}
              key={field.id}
              remove={remove}
              value={field.text}
              register={register}
              errors={errors}
              disableRemove={fields.length <= 2}
            />
          );
        })}
      </div>

      {fields?.length < maxOptions && (
        <Button variant="gray" onClick={() => append({ text: "" })}>
          <PlusIcon /> Add option
        </Button>
      )}
    </>
  );
}

export default PollOptions;
