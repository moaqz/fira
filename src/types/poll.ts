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

export type Poll = {
  id: string;
  title: string;
  description: string;
  totalCount: number;
  createdAt: string;
  endsAt: string;
  updatedAt: string;
  userId: string;
};
