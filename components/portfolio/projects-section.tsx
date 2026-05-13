import { ProjectCardNew } from "./project-card-new"
import { projects } from "@/lib/projects-data"

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0f1624] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCardNew key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
