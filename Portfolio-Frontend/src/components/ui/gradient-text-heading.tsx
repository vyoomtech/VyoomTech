// components/ui/gradient-text.tsx
import { cn } from "@/lib/utils"; // if you use shadcn/ui utils (optional)

interface GradientTextProps {
  children: React.ReactNode;
  className?: string; // allow extra styling
}

export function GradientTextHeading({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "w-full text-4xl md:text-5xl lg:text-6xl font-extrabold font-sora mb-4 leading-tight animate-fade-in bg-gradient-to-r from-blue-500 via-purple-500 to-gray-700 text-transparent bg-clip-text",
        className
      )}
    >
      {children}
    </span>
  );
}
