"use client"

import { Star } from "lucide-react"

interface SkillRatingProps {
  name: string
  rating: number // 0-3
  maxRating?: number
}

export function SkillRating({ name, rating, maxRating = 3 }: SkillRatingProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-[#c0cce8]">{name}</span>
      <div className="flex gap-1">
        {Array.from({ length: maxRating }).map((_, index) => (
          <Star
            key={index}
            className={`size-4 ${
              index < rating
                ? "fill-[#4ab8b0] text-[#4ab8b0]"
                : "text-[#7a8aaa]/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

interface SkillGroupProps {
  title: string
  skills: { name: string; rating: number }[]
}

export function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="bg-[#0d1117] rounded-lg border border-[#4ab8b0] p-5">
      <h3 className="font-semibold text-[#4ab8b0] mb-3">{title}</h3>
      <div className="divide-y divide-[#2e3d6a]">
        {skills.map((skill) => (
          <SkillRating key={skill.name} name={skill.name} rating={skill.rating} />
        ))}
      </div>
    </div>
  )
}
