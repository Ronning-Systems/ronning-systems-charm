import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
}

/**
 * V-model inspired mark.
 * Left stroke = decomposition (arrow down).
 * Right stroke = integration & verification (arrow up).
 */
export const Logo = ({ className, showWordmark = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 shrink-0"
        aria-label="Ronning Systems V-model logo"
      >
        {/* Left descending arrow */}
        <path
          d="M5 5 L20 32"
          stroke="hsl(var(--primary))"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M16.5 26.5 L20 33 L23 28"
          stroke="hsl(var(--primary))"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right ascending arrow */}
        <path
          d="M20 32 L35 5"
          stroke="hsl(var(--accent))"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M30 8 L35 5 L34.5 10.5"
          stroke="hsl(var(--accent))"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {showWordmark && (
        <span className="font-semibold tracking-tight">Ronning Systems</span>
      )}
    </div>
  );
};

export default Logo;