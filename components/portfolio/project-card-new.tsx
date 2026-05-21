"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/lib/projects-data"

interface ProjectCardNewProps {
  project: Project
}

export function ProjectCardNew({ project }: ProjectCardNewProps) {
  return (
    <Link href={`/projects/${project.id}`} className="block group">
      <div className="bg-[#0d1117] rounded-xl overflow-hidden border border-[#4ab8b0] transition-all duration-300 hover:border-[#4ab8b0]/50 hover:-translate-y-1">
        {/* Project Image */}
        <div className="aspect-video overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/${project.id === "kubernetes-monitoring" ? "k8s-project2" : project.id === "news-curation" ? "news-project" : "life-project"}.png`}
            alt={project.shortTitle}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Badge className="bg-[#4ab8b0]/20 text-[#4ab8b0] hover:bg-[#4ab8b0]/30 border-0">
              {project.category}
            </Badge>
            {project.inProgress && (
              <Badge className="bg-[#1D9E75]/20 text-[#1D9E75] hover:bg-[#1D9E75]/30 border-0">
                진행 중
              </Badge>
            )}
          </div>

          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white mb-1 leading-tight">
                {project.shortTitle}
              </h3>
              <p className="text-sm text-[#7a8aaa] mb-2">{project.period}</p>
              <p className="text-sm text-[#c0cce8] line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex-shrink-0 mt-1">
              <ArrowRight className="size-5 text-[#7a8aaa] group-hover:text-[#4ab8b0] group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
