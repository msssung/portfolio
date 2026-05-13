import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Lightbulb, AlertCircle, Rocket, ExternalLink } from "lucide-react"
import { projects } from "@/lib/projects-data"

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} | 김민성 포트폴리오`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#1a2035] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          asChild
          className="mb-8 text-white/70 hover:text-white hover:bg-white/10 -ml-2"
        >
          <Link href="/#projects">
            <ArrowLeft className="size-4 mr-2" />
            뒤로가기
          </Link>
        </Button>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-0">
              {project.category}
            </Badge>
            <span className="text-white/50 text-sm">{project.period}</span>
            {project.inProgress && (
              <Badge className="bg-blue-500/20 text-blue-400 border-0">
                진행 중
              </Badge>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>

          {/* Thumbnail Image */}
          <div className="w-full rounded-xl overflow-hidden mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/${project.id === "kubernetes-monitoring" ? "k8s-project" : project.id === "news-curation" ? "news-project" : "life-project"}.png`}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>

          {/* Description Quote Block */}
          <div className="border-l-4 border-[#4ab8b0] pl-4 py-2 bg-[#4ab8b0]/5 rounded-r-lg mb-6">
            <p className="text-white/80 leading-relaxed">{project.description}</p>
          </div>

          {/* Role Quote Block */}
          <div className="border-l-4 border-[#4ab8b0] pl-4 py-2 bg-[#4ab8b0]/5 rounded-r-lg">
            <p className="text-sm text-white/50 mb-1">담당 역할</p>
            <p className="text-white/80 leading-relaxed">{project.role}</p>
          </div>

          {project.id === "life-satisfaction" && (
            <div className="mt-4">
              <Button
                variant="outline"
                asChild
                className="bg-[#243052] border-[#2e3d6a] text-[#c0cce8] hover:bg-[#2e3d6a] hover:text-white hover:border-[#4ab8b0] rounded-full px-6 py-5 h-auto"
              >
                <a
                  href="https://velog.io/@msssung/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="size-5 mr-2 text-[#4ab8b0]" />
                  Velog
                </a>
              </Button>
            </div>
          )}
        </header>

        {/* Architecture Section */}
        {project.id !== "life-satisfaction" && (
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              <span className="text-white/50">// </span>아키텍처
            </h2>

            <div className="bg-[#1a1d26] rounded-xl p-6 border border-white/10">
              {/* Architecture Image */}
              <div className="w-full rounded-lg overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.id === "kubernetes-monitoring" ? "/k8s-architecture.png" : "/news-architecture.png"}
                  alt={`${project.title} 아키텍처`}
                  className="w-full object-cover rounded-lg"
                />
              </div>

              <div className="border-l-4 border-white/20 pl-4 py-2">
                <p className="text-sm text-white/50 mb-1">설계 근거</p>
                <p className="text-white/70 leading-relaxed">
                  {project.id === "kubernetes-monitoring" &&
                    "Spring Boot 메트릭 수집 → FastAPI AI 분석 → 4단계 파이프라인(z-score → ML → RAG → LLM)으로 점진적 정밀도 향상"}
                  {project.id === "news-curation" &&
                    "뉴스 기사 크롤링 → 지식베이스 적재 → RAG 구조 LLM 응답"}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Tech Stack Section */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            <span className="text-white/50">// </span>기술 스택
          </h2>

          <div className="space-y-4">
            {project.techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-[#243052] rounded-xl p-5 border border-white/10"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <span className="font-bold text-white">{tech.name}</span>
                  <span className="text-sm text-white/50">{tech.purpose}</span>
                </div>
                <div className="bg-[#1a2035] rounded-lg px-4 py-3">
                  <p className="text-sm text-white/70">
                    <span className="text-[#4ab8b0]">선택 이유: </span>
                    {tech.reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem Solving Section */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            <span className="text-white/50">// </span>문제 해결 경험
          </h2>

          <div className="relative pl-6">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4ab8b0]/30 rounded-full" />

            {/* Timeline Items */}
            <div className="space-y-6">
              <TimelineItem
                label="이슈"
                content={project.problemSolving.issue}
              />
              <TimelineItem
                label="분석"
                content={project.problemSolving.analysis}
              />
              <TimelineItem
                label="해결"
                content={project.problemSolving.solution}
              />
              <TimelineItem
                label="결과"
                content={project.problemSolving.result}
              />
            </div>
          </div>
        </section>

        {/* Retrospective Section */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            <span className="text-white/50">// </span>회고
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <RetroCard
              icon={Lightbulb}
              title="성장한 점"
              content={project.retrospective.improvements}
              borderColor="border-[#4ab8b0]"
              iconColor="text-[#4ab8b0]"
              bgColor="bg-[#4ab8b0]/5"
            />
            <RetroCard
              icon={AlertCircle}
              title="아쉬운 점"
              content={project.retrospective.regrets}
              borderColor="border-[#534AB7]"
              iconColor="text-[#534AB7]"
              bgColor="bg-[#534AB7]/5"
            />
            <RetroCard
              icon={Rocket}
              title="향후 방향"
              content={project.retrospective.future}
              borderColor="border-[#1D9E75]"
              iconColor="text-[#1D9E75]"
              bgColor="bg-[#1D9E75]/5"
            />
          </div>
        </section>

        {/* Bottom Back Button */}
        <div className="pt-8 border-t border-white/10">
          <Button
            variant="outline"
            asChild
            className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/#projects">
              <ArrowLeft className="size-4 mr-2" />
              프로젝트 목록으로
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

function TimelineItem({
  label,
  content,
}: {
  label: string
  content: string
}) {
  return (
    <div className="relative">
      <div
        className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-[#4ab8b0] ring-4 ring-[#1a2035]"
      />
      <div className="bg-[#243052] rounded-lg p-4 border border-white/10">
        <span className="text-sm font-medium text-white/50 block mb-1">
          {label}
        </span>
        <p className="text-white/80 leading-relaxed">{content}</p>
      </div>
    </div>
  )
}

function RetroCard({
  icon: Icon,
  title,
  content,
  borderColor,
  iconColor,
  bgColor,
}: {
  icon: React.ElementType
  title: string
  content: string
  borderColor: string
  iconColor: string
  bgColor: string
}) {
  return (
    <div
      className={`${bgColor} rounded-xl p-5 border-2 ${borderColor} border-opacity-50`}
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`size-5 ${iconColor}`} />
        <span className="font-semibold text-white">{title}</span>
      </div>
      <p className="text-sm text-white/70 leading-relaxed">{content}</p>
    </div>
  )
}
