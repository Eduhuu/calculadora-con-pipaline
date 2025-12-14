import Calculadora from "@/components/Calculadora";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-sans p-4">
      <ThemeToggle />
      <main className="flex flex-col items-center justify-center w-full max-w-lg gap-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Calculadora
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Desarrollada con TDD + Next.js Server Actions + Azure App Services + Docker + GitHub Actions
          </p>
        </div>
        
        <Calculadora />
        
        <div className="text-center text-xs text-gray-600 dark:text-gray-500 space-y-1">
          <p>Desarrollada por:</p>
          <p>✓ Eduardo Suarez</p>
          <p>✓ Daniel Lozano</p>
        </div>
      </main>
    </div>
  );
}
