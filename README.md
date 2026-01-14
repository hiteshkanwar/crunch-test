# HIIT Zone - High Intensity Interval Training App

A modern Next.js application built with TypeScript and Tailwind CSS for high-intensity interval training (HIIT) workouts.

## Features

- **Modern Design**: Clean, responsive UI built with Tailwind CSS
- **Workout Library**: Browse and filter through various HIIT workouts
- **Interactive Timer**: Real-time workout timer with exercise progression  
- **Training Programs**: Structured fitness programs for different levels
- **Progress Tracking**: Monitor your fitness journey with detailed stats
- **Achievement System**: Unlock achievements as you complete workouts
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 16.1.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: Next.js API Routes with JSON data

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hiit-zone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Endpoints

The application includes several API endpoints with JSON data:

### Workouts API (`/api/workouts`)
- `GET /api/workouts` - Get all workouts with optional filtering
- `GET /api/workouts?id=<workout-id>` - Get specific workout
- `GET /api/workouts?category=<category>` - Filter by category
- `GET /api/workouts?difficulty=<level>` - Filter by difficulty
- `POST /api/workouts` - Create new workout

### Programs API (`/api/programs`)
- `GET /api/programs` - Get all training programs
- `GET /api/programs?id=<program-id>` - Get specific program
- `GET /api/programs?level=<level>` - Filter by difficulty level

### Stats API (`/api/stats`)
- `GET /api/stats` - Get user statistics and achievements
- `POST /api/stats` - Update user stats after completing workout

## Project Structure

```
src/
├── app/
│   ├── api/          # API routes
│   ├── workouts/     # Workout pages
│   ├── programs/     # Program pages  
│   ├── progress/     # Progress tracking
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Homepage
│   └── globals.css   # Global styles
├── components/       # Reusable components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── FeaturedWorkouts.tsx
│   ├── Programs.tsx
│   └── Stats.tsx
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

### Navigation
Responsive navigation bar with mobile menu support

### Hero Section
Dynamic hero with sliding content and call-to-action buttons

### Workout Timer
Interactive timer component with:
- Exercise progression
- Rest periods
- Progress tracking
- Play/pause/skip controls

### Progress Dashboard
Comprehensive stats including:
- Workout history
- Achievement system
- Weekly goals
- Performance metrics

## Data Models

### Workout
```typescript
interface Workout {
  id: string;
  title: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  description: string;
  exercises: Exercise[];
  image: string;
  calories: number;
  rating: number;
}
```

### Exercise
```typescript
interface Exercise {
  id: string;
  name: string;
  duration: number;
  rest: number;
  instructions: string;
  targetMuscles: string[];
  equipment?: string;
}
```

### Program
```typescript
interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  workoutsPerWeek: number;
  benefits: string[];
  price: number;
  rating: number;
  students: number;
}
```

## Design Features

- **Gradient Backgrounds**: Orange to red gradients for brand consistency
- **Card-based Layout**: Clean card components with hover effects
- **Interactive Elements**: Buttons, filters, and navigation with smooth transitions
- **Progress Visualizations**: Progress bars and achievement tracking
- **Mobile-First**: Responsive design that works on all screen sizes

## Customization

The app uses Tailwind CSS for styling. Key design tokens:

- **Primary Colors**: Orange (#f97316) to Red (#ef4444) gradient
- **Secondary Colors**: Blue, Green, Yellow accents
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Border Radius**: Rounded corners (xl = 12px, 2xl = 16px)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with Next.js and React
- Icons by Lucide React  
- Styled with Tailwind CSS
- Inspired by modern fitness applications
