import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

const techStack = ["Python", "RAG", "Dify", "FastAPI", "Docker"]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[var(--navy)] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
            김민성 | Minsung Kim
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-[#4a8fd4] mb-6">
            사람과 AI를 잇는 엔지니어
          </p>

          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            RAG 파이프라인과 MLOps에 관심 있는 AI 엔지니어 지망생입니다.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-[#4a8fd4] text-[#4a8fd4] bg-[#4a8fd4]/10 px-3 py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="bg-[var(--blue-accent)] hover:bg-[var(--blue-accent)]/90 text-white"
          >
            <a href="#projects">
              프로젝트 보기
              <ArrowDown className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
