"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Calendar, Users } from "lucide-react"
import { IconBallFootball, IconSpeakerphone, IconChartBar } from "@tabler/icons-react"

const iconMap = {
  football: IconBallFootball,
  speakerphone: IconSpeakerphone,
  "chart-bar": IconChartBar,
} as const

type IconKey = keyof typeof iconMap

interface ActivityCardProps {
  title: string
  role: string
  period: string
  description: string
  iconKey: IconKey
}

export function ActivityCard({ title, role, period, description, iconKey }: ActivityCardProps) {
  const [open, setOpen] = useState(false)
  const Icon = iconMap[iconKey]

  return (
    <>
      <Card
        className="cursor-pointer transition-all duration-300 hover:border-[#4ab8b0]/50 hover:-translate-y-1 bg-[#243052] border-[#2e3d6a]"
        onClick={() => setOpen(true)}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4ab8b0]/20 flex items-center justify-center">
              <Icon size={20} className="text-[#4ab8b0]" />
            </div>
            <CardTitle className="text-base leading-tight text-white">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0 space-y-2">
          <p className="text-sm text-[#c0cce8] leading-snug">{description}</p>
          <div className="flex items-center gap-2 text-sm text-[#7a8aaa]">
            <Users className="size-4 flex-shrink-0" />
            <span>{role}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#7a8aaa]">
            <Calendar className="size-4 flex-shrink-0" />
            <span>{period}</span>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">{title}</DialogTitle>
            <DialogDescription className="sr-only">
              {title} 활동 상세 정보
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-2">
            <p className="text-foreground leading-relaxed">{description}</p>

            <div className="flex items-center gap-3 text-foreground">
              <Users className="size-5 text-[var(--blue-accent)]" />
              <div>
                <p className="text-sm text-muted-foreground">역할</p>
                <p className="font-medium">{role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-foreground">
              <Calendar className="size-5 text-[var(--blue-accent)]" />
              <div>
                <p className="text-sm text-muted-foreground">활동 기간</p>
                <p className="font-medium">{period}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
