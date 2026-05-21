import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { Section } from "@/components/portfolio/section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillGroup } from "@/components/portfolio/skill-rating"
import { ActivityCard } from "@/components/portfolio/activity-card"
import { Footer } from "@/components/portfolio/footer"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

const skillGroups = [
  {
    title: "AI/ML",
    skills: [
      { name: "RAG", rating: 3 },
      { name: "Dify", rating: 3 },
      { name: "Prompt Engineering", rating: 3 },
      { name: "Pandas", rating: 2 },
      { name: "NumPy", rating: 2 },
      { name: "LangChain", rating: 1 },
      { name: "scikit-learn", rating: 1 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", rating: 3 },
      { name: "FastAPI", rating: 2 },
    ],
  },
  {
    title: "Infra",
    skills: [
      { name: "Git & GitHub", rating: 3 },
      { name: "Docker", rating: 2 },
      { name: "Linux", rating: 1 },
      { name: "Kubernetes", rating: 1 },
    ],
  },
]

const certifications = [
  {
    name: "데이터분석 준전문가 (ADsP)",
    issuer: "한국데이터산업진흥원",
    date: "2025.03.21",
  },
  {
    name: "SQL 개발자 (SQLD)",
    issuer: "한국데이터산업진흥원",
    date: "2025.12.12",
  },
]

const activities = [
  { title: "BDAI ML 배포 중심 (MLOps) 과정", role: "수강 중", period: "2026.03 ~ 진행 중", description: "MLOps 관점의 머신러닝 모델 배포 및 운영 과정 수강 중", iconKey: "rocket" as const },
  { title: "데이터분석 스터디", role: "스터디장", period: "2025.10 ~ 2025.12", description: "Pandas를 활용한 데이터분석 기초 및 실습 스터디 운영", iconKey: "chart-bar" as const },
  { title: "학생회 홍보국", role: "홍보국 부원", period: "2025.03 ~ 2025.12", description: "정보통신공학과 학생회 홍보국원으로 활동", iconKey: "speakerphone" as const },
  { title: "중앙축구동아리 FC TOTO", role: "부회장", period: "2024.08 ~ 2024.12", description: "동국대학교 중앙 축구 동아리 부회장으로 활동", iconKey: "football" as const },
  { title: "학과 축구소모임 FC정통", role: "부회장", period: "2025.03 ~ 2026.02", description: "정보통신공학과 축구 소모임 부회장으로 활동", iconKey: "football" as const },
]

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Skills Section - 홀수 (navy) */}
        <Section id="skills" title="Skills">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} {...group} />
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 bg-[#0d1117] rounded-lg border border-[#4ab8b0] p-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#4ab8b0]/20 flex items-center justify-center">
                <GraduationCap className="size-7 text-[#4ab8b0]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">동국대학교</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge className="bg-[#4ab8b0]/20 text-[#4ab8b0] border-0 text-sm font-semibold px-3 py-1">정보통신공학</Badge>
                  <Badge className="bg-[#4ab8b0]/20 text-[#4ab8b0] border-0 text-sm font-semibold px-3 py-1">데이터사이언스SW</Badge>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Certifications Section */}
        <Section id="certifications" title="Certifications">
          <div className="max-w-2xl mx-auto space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-4 bg-[#0d1117] rounded-lg border border-[#4ab8b0] p-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4ab8b0]/20 flex items-center justify-center">
                  <Award className="size-6 text-[#4ab8b0]" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-white">{cert.name}</h3>
                  <p className="text-sm text-[#7a8aaa]">{cert.issuer}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#7a8aaa]">
                  <Calendar className="size-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Activities Section */}
        <Section id="activities" title="Activities">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activities.slice(0, 3).map((activity) => (
                <ActivityCard key={activity.title} {...activity} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-2xl md:mx-auto">
              {activities.slice(3).map((activity) => (
                <ActivityCard key={activity.title} {...activity} />
              ))}
            </div>
          </div>
        </Section>

      </main>
      <Footer />
    </>
  )
}
