// Shared color lookup so the same technology always gets the same accent
// across Skills, Experience, and Projects — this is what makes the tools
// read as "highlighted" rather than flat gray text everywhere.

export const techColors = {
  // Frontend
  React: "#61dafb",
  Vite: "#bd93f9",
  "Tailwind CSS": "#38bdf8",
  JavaScript: "#facc15",
  JSX: "#61dafb",
  "HTML/CSS": "#fb7185",
  "Mantine UI": "#845ef7",
  "shadcn/ui": "#e2e8f0",

  // Backend
  "Node.js": "#84cc16",
  "Express.js": "#a3a3a3",
  FastAPI: "#34d399",
  Python: "#fbbf24",
  TypeScript: "#3b82f6",
  "REST APIs": "#f472b6",

  // Database & ORM
  PostgreSQL: "#38bdf8",
  "Prisma ORM": "#22d3ee",
  Prisma: "#22d3ee",
  "SQLAlchemy (async)": "#d6336c",
  SQLAlchemy: "#d6336c",
  asyncpg: "#0ea5e9",
  Alembic: "#f97316",
  Supabase: "#34d399",
  MySQL: "#ac0b2e",
  Firebase: "#f97316",

  // Tools & DevOps
  Git: "#fb7185",
  GitHub: "#e2e8f0",
  Vercel: "#e2e8f0",
  Render: "#6366f1",
  Cloudflare: "#fb923c",
  VSCode: "#38bdf8",
  "Android Studio": "#34d399",
  Postman: "#fb923c",

  // Architecture
  RBAC: "#a78bfa",
  "Multi-schema DB": "#22d3ee",
  "Feature-based arch": "#818cf8",
  "Design Science Research": "#fbbf24",
  "Agile/Scrum": "#34d399",

  // Currently learning
  Docker: "#38bdf8",
  "CI/CD": "#a78bfa",
  "PhilSys API integration": "#fb7185",
  "Self-hosted deployment": "#34d399",
}

export function getToolColor(name, fallback = "#818cf8") {
  return techColors[name] || fallback
}
