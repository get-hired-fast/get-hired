# 🚀 Helpr - AI-Powered Job Application Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.10.1-2D3748)](https://www.prisma.io/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6366F1)](https://clerk.com/)

> **Helpr** is an intelligent job application platform that helps students and professionals discover, apply to, and track opportunities including internships, jobs, hackathons, and challenges. Built with modern web technologies and AI-powered matching algorithms.

## ✨ Features

### 🎯 Smart Job Matching
- **AI-Powered Recommendations**: Get personalized job suggestions based on your skills and preferences
- **Skill-Based Filtering**: Filter opportunities by your specific skills and expertise
- **Smart Search**: Advanced search with multiple filters and sorting options

### 📝 Professional Profile Builder
- **Multi-Step Profile Creation**: Comprehensive profile setup with basic details, education, professional experience, and social links
- **Resume Upload**: Upload and manage your resume with automatic parsing
- **Social Integration**: Connect your LinkedIn, GitHub, LeetCode, and portfolio profiles

### 🚀 One-Click Applications
- **Auto-Apply Feature**: Apply to multiple opportunities with a single click
- **Application Tracking**: Monitor your application status in real-time
- **Deadline Alerts**: Never miss important deadlines with intelligent notifications

### 💼 Opportunity Management
- **Save Opportunities**: Bookmark interesting positions for later
- **Application History**: Track all your applications with detailed status updates
- **Interview Scheduling**: Manage interview dates and reminders

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icons

### Backend & Database
- **[Prisma ORM](https://www.prisma.io/)** - Type-safe database client
- **[PostgreSQL](https://www.postgresql.org/)** - Primary database (supports MySQL/SQLite)
- **[Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)** - Backend API

### Authentication & Services
- **[Clerk](https://clerk.com/)** - Authentication and user management
- **[React Dropzone](https://react-dropzone.js.org/)** - File upload handling
- **[Date-fns](https://date-fns.org/)** - Date manipulation utilities

### Development Tools
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Database** - PostgreSQL (recommended), MySQL, or SQLite
- **Clerk Account** - For authentication setup

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/get-hired.git
   cd get-hired/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update your `.env` file with:
   ```env
   # Database (Choose one)
   DATABASE_URL="postgresql://username:password@localhost:5432/helpr_db?schema=public"
   # DATABASE_URL="mysql://username:password@localhost:3306/helpr_db"
   # DATABASE_URL="file:./dev.db"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Push schema to database
   npx prisma db push
   
   # (Optional) Seed with initial data
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Database Setup

For detailed database setup instructions, see [DATABASE_SETUP.md](frontend/DATABASE_SETUP.md).

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── components/        # Shared UI components
│   ├── create-profile/    # Profile creation flow
│   ├── dashboard/         # User dashboard
│   ├── opportunities/     # Job opportunities page
│   ├── profile/          # User profile page
│   └── saved-opportunities/ # Saved jobs page
├── components/
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
├── prisma/               # Database schema and migrations
└── public/               # Static assets
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Database
npm run db:generate      # Generate Prisma client
npm run db:push          # Push schema changes
npm run db:migrate       # Create and run migrations
npm run db:seed          # Seed database
npm run db:studio        # Open Prisma Studio
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🐛 Reporting Bugs
- Use the [GitHub issue tracker](https://github.com/yourusername/get-hired/issues)
- Include detailed steps to reproduce the bug
- Provide your environment details (OS, Node.js version, etc.)

### 💡 Suggesting Features
- Open a new issue with the "enhancement" label
- Describe the feature and its benefits
- Consider implementation complexity

### 🔧 Submitting Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation if needed
4. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### 📋 Development Guidelines

- **Code Style**: Follow the existing TypeScript and React patterns
- **Testing**: Add tests for new features and bug fixes
- **Documentation**: Update README and code comments as needed
- **Commits**: Use conventional commit messages (feat:, fix:, docs:, etc.)

### 🎯 Good First Issues

Looking to get started? Check out these beginner-friendly issues:
- [ ] Add loading states to components
- [ ] Improve error handling
- [ ] Add unit tests
- [ ] Enhance accessibility
- [ ] Optimize performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Clerk](https://clerk.com/) for authentication
- [Prisma](https://www.prisma.io/) for the excellent ORM
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible components

## 📞 Support

- **Documentation**: Check the [DATABASE_SETUP.md](frontend/DATABASE_SETUP.md) for detailed setup instructions
- **Issues**: Report bugs and request features on [GitHub Issues](https://github.com/yourusername/get-hired/issues)
- **Discussions**: Join the conversation on [GitHub Discussions](https://github.com/yourusername/get-hired/discussions)

---

**Made with ❤️ by the Helpr team**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/get-hired?style=social)](https://github.com/yourusername/get-hired)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/get-hired?style=social)](https://github.com/yourusername/get-hired)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/get-hired)](https://github.com/yourusername/get-hired/issues)
