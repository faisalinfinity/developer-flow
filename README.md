# Developer Flow 🚀

A modern Q&A platform for developers built with Next.js 14, featuring AI-powered answers and a rich interactive experience.

## 🌟 Features

### Authentication & Security
- Secure authentication with Clerk
- Multiple sign-in options: Email/Password, Google, and GitHub
- Protected routes and API endpoints

### Core Features
- **Smart Home Feed**
  - Personalized question recommendations
  - Advanced filtering and search capabilities
  - Infinite scroll pagination
  - Real-time content updates

- **Rich Question Experience**
  - TinyMCE editor for rich text formatting
  - Code syntax highlighting
  - Image upload support
  - Interactive voting system
  - View tracking
  - Bookmark functionality

- **AI-Powered Answers**
  - OpenAI integration for automated responses
  - Context-aware answer generation
  - AI response quality monitoring

- **Advanced Answer Management**
  - MDX editor with dark/light mode
  - Answer sorting and filtering
  - Voting system
  - Best answer selection

- **User Features**
  - Customizable user profiles
  - Reputation system
  - Achievement badges
  - Activity history
  - Collections management

- **Community Features**
  - User discovery with filters
  - Tag-based navigation
  - Job board with location-based recommendations
  - Global search functionality

## 🛠️ Tech Stack

- **Frontend**
  - Next.js 14 (App Router)
  - TailwindCSS
  - TinyMCE
  - Zustand (State Management)
  - Zod (Schema Validation)

- **Backend**
  - Node.js
  - MongoDB with Mongoose
  - OpenAI API
  - Clerk Authentication

## 📦 Project Structure

```
developer-flow/
├── app/
│   ├── (auth)/
│   ├── (root)/
│   └── api/
├── components/
│   ├── shared/
│   ├── forms/
│   └── ui/
├── lib/
│   ├── actions/
│   ├── models/
│   ├── utils/
│   └── validators/
└── public/
```

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/developer-flow.git
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```env
# Create a .env.local file with:
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_TINY_EDITOR_API_KEY=
MONGODB_URL=
WEBHOOK_SECRET=
OPENAI_API_KEY= 
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
MONGODB_URI=
OPENAI_API_KEY=
TINY_MCE_API_KEY=
```

4. Run the development server
```bash
npm run dev
```

## 🔧 Configuration

### Database Setup
1. Create a MongoDB cluster
2. Configure connection string in `.env.local`
3. Run database migrations

### Authentication Setup
1. Configure Clerk dashboard
2. Set up OAuth providers
3. Add authentication keys to `.env.local`

## 🎯 Code Quality

- ESLint and Prettier configuration
- TypeScript for type safety
- Husky for pre-commit hooks
- Jest and React Testing Library for testing

## 🔐 Security Features

- Input sanitization
- CSRF protection
- Rate limiting
- XSS prevention
- Data encryption

## 🎨 Design System

- Consistent component library
- Responsive design patterns
- Dark/light mode support
- Accessibility compliance

## 📱 Responsive Design

- Mobile-first approach
- Optimized for:
  - Desktop (1200px+)
  - Tablet (768px - 1199px)
  - Mobile (320px - 767px)

## ⚡ Performance

- Server-side rendering
- Image optimization
- Code splitting
- Caching strategies
- Lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to your branch
5. Open a pull request


## 📧 Contact

For questions or support, please email [mujtabafaisal944.fk@gmail.com](mailto:mujtabafaisal944.fk@gmail.com)

---

Built with ❤️ by Faisal Mujtaba
