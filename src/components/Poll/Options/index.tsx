import { Plus } from "@components/Icons";
import Button from "@/components/Button";
import PollOption from "../Option";
import type { PollOptionsProps } from "@/types/poll";
import { useFieldArray } from "react-hook-form";

function PollOptions({
  control,
  register,
  maxOptions = 5,
  errors,
}: PollOptionsProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-brand-subtext">Options</p>
        {fields?.map((field: any, index: number) => {
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
        <Button
          variant="gray"
          onClick={() => {
            append({ text: "" });
          }}
        >
          <Plus /> Add option
        </Button>
      )}
    </>
  );
}

export default PollOptions;
