# ImmigrationBuddy

ImmigrationBuddy is a responsive, modern web application that helps prospective U.S. immigrants understand their pathway options. Users can select their nationality, describe their personal situation, and receive personalized guidance powered by AI.

## Features

- **Personalized Immigration Guidance**: Get tailored immigration options based on your nationality and personal situation
- **User Accounts**: Save your results and track your immigration journey
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **LLM Integration**: Powered by AI to provide accurate and up-to-date immigration information

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript, React, and Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL with Prisma ORM
- **AI Integration**: LLM API for personalized immigration guidance

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/immigration-buddy.git
   cd immigration-buddy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/immigration_buddy"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   LLM_API_KEY="your-api-key-here"
   LLM_API_URL="https://api.openai.com/v1"
   ```

4. Set up the database:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable UI components
- `/src/lib` - Utility functions and shared libraries
- `/prisma` - Database schema and migrations

## Deployment

This application can be deployed to Vercel, Netlify, or any other platform that supports Next.js applications.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with Next.js and Tailwind CSS
- Powered by AI for immigration guidance
- All immigration information should be verified with official USCIS sources
