import type {
  Control,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import type { CreatePoll } from "@lib/validations/createPoll";

export type CreatePollType = {
  description?: string | undefined;
  title: string;
  endDate: string;
  options: {
    text: string;
  }[];
};

export interface PollOptionProps {
  index: number;
  register: UseFormRegister<CreatePoll>;
  errors: FieldErrors<CreatePoll>;
  remove: UseFieldArrayRemove;
  value: string;
  disableRemove: boolean;
}

export interface PollOptionsProps {
  control: Control<CreatePoll>;
  errors: FieldErrors<CreatePoll>;
  register: UseFormRegister<CreatePoll>;
  maxOptions?: number;
}

export type UserVotes = {
  pollOptionId: string;
  pollId: string;
  userId: string;
};

export type OptionType = {
  id: string;
  text: string;
  totalCount: number;
  pollId: string;
  userVotes: UserVotes[];
};

export type UserType = {
  email: string;
  id: string;
  image: string;
  name: string;
  emailVerified: string | null;
};

export type PollType = {
  id: string;
  title: string;
  description: string;
  totalCount: number;
  createdAt: string;
  endsAt: string;
  updatedAt: string;
  userId: string;
  options: OptionType[];
  user: UserType;
};
