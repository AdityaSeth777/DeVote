# DeVote - Decentralized Voting Platform

A secure and transparent voting platform built on Solana blockchain.

## Features

- Secure authentication with Firebase and Phantom wallet
- Real-time vote tracking and results
- Admin dashboard for election management
- Multi-language support
- Dark mode
- Responsive design
- Smart contract integration with Solana

## Technical Stack

- Frontend: React.js with TypeScript
- UI Components: shadcn/ui
- Styling: Tailwind CSS
- Blockchain: Solana (Smart Contracts in Rust)
- Backend: .NET 9
- Authentication: Firebase + Phantom Wallet
- Hosting: Vercel (Frontend) + Azure (Backend)

## Smart Contract Setup

1. Install Solana Tool Suite
```bash
sh -c "$(curl -sSfL https://release.solana.com/v1.17.0/install)"
```

2. Create a new Solana program
```bash
cargo new --lib voting-program
cd voting-program
```

3. Add required dependencies to Cargo.toml
```toml
[package]
name = "voting-program"
version = "0.1.0"
edition = "2021"

[dependencies]
solana-program = "1.17.0"
borsh = "0.10.3"
thiserror = "1.0.50"

[lib]
crate-type = ["cdylib", "lib"]
```

## Backend Setup (.NET)

1. Create new .NET Web API project
```bash
dotnet new webapi -n DeVote.Api
cd DeVote.Api
```

2. Add required packages
```bash
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
dotnet add package Solnet.Rpc
```

## Frontend Development

1. Install dependencies
```bash
npm install
```

2. Start development server
```bash
npm run dev
```

## Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Backend (Azure)

1. Create Azure Web App
2. Set up CI/CD pipeline in Azure DevOps
3. Configure environment variables

## Environment Variables

Create a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_SOLANA_RPC_URL=your_solana_rpc_url
VITE_BACKEND_API_URL=your_backend_api_url
```

## Testing

1. Run frontend tests
```bash
npm run test
```

2. Run smart contract tests
```bash
cargo test
```

3. Run backend tests
```bash
dotnet test
```

## Security Considerations

- Implement rate limiting
- Use secure WebSocket connections
- Implement proper error handling
- Follow GDPR compliance guidelines
- Regular security audits
- Implement backup systems

## License

MIT