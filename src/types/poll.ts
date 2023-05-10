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

export type PollOption = {
  id: string;
  text: string;
  totalCount: number;
  pollId: string;
  userVotes: UserVote[];
};

export type UserVote = {
  pollOptionId: string;
  pollId: string;
  userId: string;
};

export type User = {
  id: string;
  name: string;
  image: string;
};

export type PollInfo = {
  options: PollOption[];
  user: User;
  hasFinished: boolean;
} & Poll;
