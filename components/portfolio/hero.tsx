import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Phone, FileText } from "lucide-react"

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const contacts = [
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/msssung" },
  { icon: FileText, label: "Velog", href: "https://velog.io/@msssung" },
  { icon: Mail, label: "kms_0109@naver.com", href: "mailto:kms_0109@naver.com" },
  { icon: Phone, label: "010-2623-8351", href: "tel:010-2623-8351" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0d1117] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance">
            김민성 | Minsung Kim
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-[#4ab8b0] mb-6">
            사람과 AI를 잇는 엔지니어
          </p>

          <p className="text-lg md:text-xl text-white/70 mb-28 max-w-2xl mx-auto leading-relaxed">
            RAG 파이프라인과 MLOps에 관심 있는 AI 엔지니어 지망생입니다.<br />
            AI 모델이 실제 서비스에서 안정적으로 동작할 수 있도록 개발부터 배포까지 함께 고려하는 엔지니어를 목표로 하고 있습니다.<br />
            기술이 사람에게 닿을 수 있도록, 사람과 AI를 잇는 다리가 되고 싶습니다.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {contacts.map((contact) => (
              <Button
                key={contact.label}
                variant="outline"
                asChild
                className="bg-[#0d1117] border-[#4ab8b0] text-[#c0cce8] hover:bg-[#2e3d6a] hover:text-white hover:border-[#4ab8b0] rounded-full px-6 py-5 h-auto"
              >
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <contact.icon className="size-5 mr-2 text-[#4ab8b0]" />
                  {contact.label}
                </a>
              </Button>
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
