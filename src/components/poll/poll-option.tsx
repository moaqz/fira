import {
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";

import { Input } from "@ui/index";
import type { CreatePoll } from "@/lib/validations/createPoll";
import FormValidation from "@components/errors/form-validation";
import { CancelIcon } from "@ui/icons";

function PollOption({
  index,
  register,
  remove,
  value,
  disableRemove,
  errors,
}: {
  index: number;
  register: UseFormRegister<CreatePoll>;
  errors: FieldErrors<CreatePoll>;
  remove: UseFieldArrayRemove;
  value: string;
  disableRemove: boolean;
}) {
  return (
    <div>
      <div className="relative mb-2 flex items-center">
        <Input
          key={index}
          id={`option-${index}`}
          placeholder={`Option ${index + 1}`}
          defaultValue={value}
          {...register(`options.${index}.text`)}
        />

        {!disableRemove && (
          <button
            className="absolute right-4"
            type="button"
            onClick={() => remove(index)}
          >
            <CancelIcon />
          </button>
        )}
      </div>
      {errors.options?.[index]?.text && (
        <FormValidation>Blank option not allowed</FormValidation>
      )}
    </div>
  );
}

export default PollOption;
