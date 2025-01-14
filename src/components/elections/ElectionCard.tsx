import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Election } from '@/types';

interface ElectionCardProps {
  election: Election;
  onVote: (electionId: string) => void;
}

export function ElectionCard({ election, onVote }: ElectionCardProps) {
  const isActive = election.status === 'active';
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{election.title}</CardTitle>
        <CardDescription>{election.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {election.candidates.map((candidate) => (
            <div key={candidate.id} className="space-y-2">
              <div className="flex justify-between">
                <span>{candidate.name}</span>
                <span>{((candidate.voteCount / election.totalVotes) * 100).toFixed(1)}%</span>
              </div>
              <Progress value={(candidate.voteCount / election.totalVotes) * 100} />
            </div>
          ))}
          
          <Button 
            className="w-full"
            disabled={!isActive}
            onClick={() => onVote(election.id)}
          >
            {isActive ? "Vote Now" : election.status === 'upcoming' ? "Coming Soon" : "Ended"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}