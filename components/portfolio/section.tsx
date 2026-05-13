import { cn } from "@/lib/utils"

interface SectionProps {
  id?: string
  title: string
  children: React.ReactNode
  className?: string
  variant?: "navy" | "navy-dark"
}

export function Section({ id, title, children, className, variant = "navy" }: SectionProps) {
  const bgClass = variant === "navy-dark" ? "bg-[#0f1624]" : "bg-[#1a2035]"

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20",
        bgClass,
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
