import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { ElectionCard } from '@/components/elections/ElectionCard';
import { CreateElectionForm } from '@/components/admin/CreateElectionForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Election } from '@/types';

const mockElections: Election[] = [
  {
    id: '1',
    title: 'Community Council Election 2024',
    description: 'Vote for your representatives in the community council',
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-03-15'),
    candidates: [
      {
        id: '1',
        name: 'Alice Johnson',
        description: 'Experienced community leader',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        voteCount: 150
      },
      {
        id: '2',
        name: 'Bob Smith',
        description: 'Tech innovation advocate',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        voteCount: 120
      }
    ],
    totalVotes: 270,
    status: 'active'
  }
];

function App() {
  const [isAdmin] = useState(true);

  const handleVote = (electionId: string) => {
    // Handle voting logic
    console.log('Voting in election:', electionId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="elections">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="elections">Elections</TabsTrigger>
            {isAdmin && <TabsTrigger value="admin">Admin</TabsTrigger>}
          </TabsList>
          
          <TabsContent value="elections" className="space-y-6">
            <h1 className="text-3xl font-bold">Active Elections</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockElections.map((election) => (
                <ElectionCard
                  key={election.id}
                  election={election}
                  onVote={handleVote}
                />
              ))}
            </div>
          </TabsContent>
          
          {isAdmin && (
            <TabsContent value="admin">
              <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Create New Election</h1>
                <CreateElectionForm />
              </div>
            </TabsContent>
          )}
        </Tabs>
      </main>
    </div>
  );
}

export default App;