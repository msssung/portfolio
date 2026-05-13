"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail, Phone, FileText } from "lucide-react"

const contacts = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/msssung",
    isLink: true,
  },
  {
    icon: FileText,
    label: "Velog",
    href: "https://velog.io/@msssung",
    isLink: true,
  },
  {
    icon: Mail,
    label: "kms_0109@naver.com",
    href: "mailto:kms_0109@naver.com",
    isLink: true,
  },
  {
    icon: Phone,
    label: "010-2623-8351",
    href: "tel:010-2623-8351",
    isLink: true,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#1a2035] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
          Contact
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {contacts.map((contact) => (
            <Button
              key={contact.label}
              variant="outline"
              asChild
              className="bg-[#243052] border-[#2e3d6a] text-[#c0cce8] hover:bg-[#2e3d6a] hover:text-white hover:border-[#4a8fd4] rounded-full px-6 py-5 h-auto"
            >
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <contact.icon className="size-5 mr-2 text-[#4a8fd4]" />
                {contact.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
