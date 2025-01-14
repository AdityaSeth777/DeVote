# Decentralized Voting

<p align="center">
  <a href="" rel="noopener">
    <img src="./src/assets/readme2.jpeg" alt="DeVote">
  </a>
</p>

<h3 align="center">Decentralized Voting Platform</h3>

<div align="center">

[![Hackathon](https://img.shields.io/badge/Hackathon-StatusCode1-orange.svg)](http://hackathon.url.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

This project is a decentralized voting platform built on the Ethereum blockchain, designed to ensure transparency, security, and immutability in the voting process.

## 📝 Table of Contents

- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Dependencies and Limitations](#dependencies-and-limitations)
- [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement

Traditional voting systems face challenges such as voter fraud, manipulation of results, and lack of transparency. These centralized systems are also vulnerable to cyber-attacks and data breaches, jeopardizing the integrity of the voting process.

## 💡 Solution

This project addresses these challenges by leveraging blockchain technology to create a decentralized voting platform. Key features include:
- **Security:** Immutable vote records secured on the Ethereum blockchain.
- **Transparency:** Real-time visibility of votes.
- **Authentication:** Secure voter authentication using JWT tokens.
- **Data Management:** Voter data management using a MySQL database hosted on Microsoft Azure.

## ⛓️ Dependencies and Limitations

### Backend (FastAPI)
- **Python 3.9+**
- **FastAPI**: Web framework for building APIs
- **PyJWT**: JWT token management
- **mysql-connector-python**: MySQL database connector
- **dotenv**: Environment variable management

### Frontend
- **Node.js & npm**: Dependency and script management
- **Express**: Server for handling static files and authentication
- **MetaMask**: Ethereum wallet integration

### Blockchain
- **Truffle**: Ethereum development framework
- **Web3.js**: Blockchain interaction library

### Cloud Services
- **Microsoft Azure:**
  - Azure MySQL Database for voter data storage
  - Azure App Service for backend hosting
- **Vercel/Netlify** (Optional): Frontend hosting

## 🏁 Installation

Follow these steps to set up the project on your local machine.

### Prerequisites

Install the following software:
- [Node.js](https://nodejs.org/)
- [Python 3.9+](https://www.python.org/)
- [Ganache](https://trufflesuite.com/ganache/)
- [MetaMask](https://metamask.io/download/)

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/AdityaSeth777/DeVote.git
   ```

2. **Set Up Ganache:**
   - Create a workspace named **development**.
   - Add `truffle-config.js` in the Truffle projects section.

3. **Configure MetaMask:**
   - Import accounts from Ganache.
   - Add the following network configuration:
     - Network Name: Localhost 7575
     - RPC URL: `http://localhost:7545`
     - Chain ID: 1337
     - Currency Symbol: ETH

4. **Set Up MySQL Database:**
   - Create a database named **voter_db**.
   - Create a `voters` table with the following schema:
     ```sql
     CREATE TABLE voters (
         voter_id VARCHAR(36) PRIMARY KEY NOT NULL,
         role ENUM('admin', 'user') NOT NULL,
         password VARCHAR(255) NOT NULL
     );
     ```

5. **Install Truffle:**
   ```bash
   npm install -g truffle
   ```

6. **Install Node.js Modules:**
   ```bash
   npm install
   ```

7. **Install Python Dependencies:**
   ```bash
   pip install fastapi mysql-connector-python pydantic python-dotenv uvicorn PyJWT
   ```

## 🚀 Usage

### Database Configuration

Update database credentials in `./db/.env`.

### Steps to Run the Application

1. **Start Ganache and Open the Development Workspace.**

2. **Compile and Migrate Smart Contracts:**
   ```bash
   truffle compile
   truffle migrate
   ```

3. **Bundle Frontend Scripts:**
   ```bash
   browserify ./src/js/app.js -o ./src/dist/app.bundle.js
   ```

4. **Start the Node.js Server:**
   ```bash
   node index.js
   ```

5. **Run the FastAPI Server:**
   ```bash
   cd db
   uvicorn main:app --reload --host 127.0.0.1
   ```

The application should be accessible at [http://localhost:8080](http://localhost:8080).

## 💻 Technology Stack

- **Blockchain:** Ethereum, Truffle, Web3.js
- **Backend:** FastAPI, Python, MySQL
- **Frontend:** Node.js, Express, MetaMask
- **Cloud:** Microsoft Azure (App Service, MySQL Database), Vercel/Netlify

## ✍️ Authors

- Aditya Seth: Lead developer responsible for design, development, smart contracts, bug fixes, and system optimization.
- Aditi Ghosh: Developed chatbot functionality and assisted in background design.
- Rudranil Chowdhury: Assisted in background design and UI elements.
- Ayash Bera: Contributed to initial smart contract development, and overall team spirit rejuvenation.

## 🎉 Acknowledgments

- Special thanks to all contributors and inspiration from the blockchain community.
- References and helpful tools for blockchain development.
