// Icons
import { Cancel } from "@/components/Icons";

// Components
import { Input } from "@components/Form";

// Types & Constants
import type { PollOptionProps } from "@/types/poll";

function PollOption({
  index,
  register,
  remove,
  value,
  disableRemove,
  errors,
}: PollOptionProps) {
  return (
    <div>
      <div className="relative mb-2 flex items-center">
        <Input
          key={index}
          id={`option-${index}`}
          placeholder={`Option ${index + 1}`}
          defaultValue={value}
          {...register(`options.${index}.text`, { required: true })}
        />

        {!disableRemove && (
          <button
            className="absolute right-4"
            type="button"
            onClick={() => remove(index)}
          >
            <Cancel />
          </button>
        )}
      </div>
      {errors.options?.[index]?.text && (
        <p className="text-bold text-red-500">Blank option not allowed</p>
      )}
    </div>
  );
}

export default PollOption;
