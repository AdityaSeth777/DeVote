import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, VoteIcon } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    // Phantom wallet connection logic would go here
    setWalletConnected(true);
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <VoteIcon className="h-6 w-6" />
          <span className="text-xl font-bold">DeVote</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
          
          <Button
            onClick={connectWallet}
            variant={walletConnected ? "secondary" : "default"}
          >
            {walletConnected ? "Connected" : "Connect Wallet"}
          </Button>
        </div>
      </div>
    </header>
  );
}