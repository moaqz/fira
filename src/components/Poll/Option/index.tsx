import { Cancel } from "@/components/Icons";
import { Input, ErrorMessage } from "@components/Form";
import type { PollOptionProps } from "@/types/poll";

function PollOption(props: PollOptionProps) {
  const { index, register, remove, value, disableRemove, errors } = props;

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
            <Cancel />
          </button>
        )}
      </div>
      {errors.options?.[index]?.text && (
        <ErrorMessage>Blank option not allowed</ErrorMessage>
      )}
    </div>
  );
}

export default PollOption;
