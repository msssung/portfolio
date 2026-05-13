import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { Section } from "@/components/portfolio/section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillGroup } from "@/components/portfolio/skill-rating"
import { ActivityCard } from "@/components/portfolio/activity-card"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

const skillGroups = [
  {
    title: "AI/ML",
    skills: [
      { name: "RAG", rating: 0 },
      { name: "Dify", rating: 0 },
      { name: "GPT API", rating: 0 },
      { name: "Prompt Engineering", rating: 0 },
      { name: "Milvus", rating: 0 },
      { name: "LangChain", rating: 0 },
      { name: "scikit-learn", rating: 0 },
      { name: "Pandas", rating: 0 },
      { name: "NumPy", rating: 0 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", rating: 0 },
      { name: "FastAPI", rating: 0 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", rating: 0 },
      { name: "JavaScript", rating: 0 },
      { name: "HTML/CSS", rating: 0 },
    ],
  },
  {
    title: "Infra",
    skills: [
      { name: "Git & GitHub", rating: 0 },
      { name: "Linux", rating: 0 },
      { name: "Docker", rating: 0 },
      { name: "Kubernetes", rating: 0 },
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
  { title: "중앙축구동아리 FC TOTO", role: "부회장", period: "2024.08 ~ 2024.12", description: "동국대학교 중앙 축구 동아리 부회장으로 활동" },
  { title: "과축구소모임 FC정통", role: "부회장", period: "2025.03 ~ 2026.02", description: "정보통신공학과 축구 소모임 부회장으로 활동" },
  { title: "학생회 홍보국", role: "활동", period: "2025.03 ~ 2025.12", description: "정보통신공학과 학생회 홍보국원으로 활동" },
  { title: "데이터분석 스터디", role: "스터디장", period: "2025.10 ~ 2025.12", description: "Pandas, 데이터프레임 등 데이터분석 기초 및 응용 스터디 운영" },
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
        <Section id="skills" title="Skills" variant="navy">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} {...group} />
            ))}
          </div>
        </Section>

        {/* Certifications Section - 짝수 (navy-dark) */}
        <Section id="certifications" title="Certifications" variant="navy-dark">
          <div className="max-w-2xl mx-auto space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-4 bg-[#243052] rounded-lg border border-[#2e3d6a] p-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4a8fd4]/20 flex items-center justify-center">
                  <Award className="size-6 text-[#4a8fd4]" />
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

        {/* Education Section - 홀수 (navy) */}
        <Section id="education" title="Education" variant="navy">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 bg-[#243052] rounded-lg border border-[#2e3d6a] p-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#4a8fd4]/20 flex items-center justify-center">
                <GraduationCap className="size-7 text-[#4a8fd4]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">동국대학교</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge className="bg-[#4a8fd4]/20 text-[#4a8fd4] border-0">정보통신공학</Badge>
                  <Badge className="bg-[#4a8fd4]/20 text-[#4a8fd4] border-0">데이터사이언스SW</Badge>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Activities Section - 짝수 (navy-dark) */}
        <Section id="activities" title="Activities" variant="navy-dark">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {activities.map((activity) => (
              <ActivityCard key={activity.title} {...activity} />
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
