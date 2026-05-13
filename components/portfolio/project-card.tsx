"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  role?: string
  stack: string[]
  details: string[]
  link?: string
  inProgress?: boolean
}

export function ProjectCard({
  title,
  description,
  role,
  stack,
  details,
  link,
  inProgress,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card
        className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50"
        onClick={() => setOpen(true)}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg leading-tight">{title}</CardTitle>
            {inProgress && (
              <Badge className="bg-[var(--blue-accent)] text-white shrink-0">
                In Progress
              </Badge>
            )}
          </div>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-1.5">
            {stack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {stack.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{stack.length - 4}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start justify-between gap-3">
              <DialogTitle className="text-xl">{title}</DialogTitle>
              {inProgress && (
                <Badge className="bg-[var(--blue-accent)] text-white shrink-0">
                  In Progress
                </Badge>
              )}
            </div>
            <DialogDescription className="text-base">{description}</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-2">
            {role && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-1">역할</h4>
                <p className="text-foreground">{role}</p>
              </div>
            )}

            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">기술 스택</h4>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">상세 내용</h4>
              <ul className="space-y-1.5">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground">
                    <span className="text-[var(--blue-accent)] mt-1.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--blue-accent)] hover:underline font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="size-4" />
                프로젝트 링크
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
