export interface Election {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  candidates: Candidate[];
  totalVotes: number;
  status: 'upcoming' | 'active' | 'ended';
}

export interface Candidate {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  voteCount: number;
}

export interface User {
  id: string;
  walletAddress: string;
  email: string;
  isAdmin: boolean;
  votingHistory: string[];
}