// components/ui/gradient-text.tsx
import { cn } from "@/lib/utils"; // if you use shadcn/ui utils (optional)

interface GradientTextProps {
  children: React.ReactNode;
  className?: string; // allow extra styling
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "w-full max-w-5xl text-xl md:text-2xl mb-10 mx-auto leading-relaxed animate-fade-in bg-gradient-to-r from-gray-700 via-purple-500 to-blue-500 dark:from-gray-300 dark:via-purple-300 dark:to-blue-300 text-transparent bg-clip-text",
        className
      )}
    >
      {children}
    </span>
  );
}
