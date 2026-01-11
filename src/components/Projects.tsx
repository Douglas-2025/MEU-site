"use client"

import React, { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface Project {
  id: number
  title: string
  description: string
  image: string
  demoLink: string
  githubLink: string
  techStack: string[]
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Landing page barbearia com agendamento",
      description:
        "Landing page moderna com foco em conversão, identidade visual forte e agendamento online integrado.",
      image: "/img/huracanbarber.jpg",
      demoLink: "https://huracanbarbearia.vercel.app/",
      githubLink: "https://github.com/Douglas-2025/Lading-page-barbearia",
      techStack: ["VITE", "REACT", "TYPESCRIPT", "TAILWIND", "SUPABASE"],
    },
    {
      id: 2,
      title: "Holanda do Vale",
      description:
        "Site institucional focado em publicidade outdoor, com layout moderno e acesso rápido às redes sociais.",
      image: "/img/holandadovale.jpeg",
      demoLink: "https://holandadovale.com.br/",
      githubLink: "https://github.com",
      techStack: ["HTML5", "CSS3", "BOOTSTRAP", "JAVASCRIPT"],
    },
    {
      id: 3,
      title: "Açaí Delivery",
      description:
        "Sistema de pedidos online com cardápio visual, preços claros e experiência fluida para o usuário.",
      image: "/img/Açai.jpeg",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      techStack: ["NEXT.JS", "BOOTSTRAP", "CSS3", "JAVASCRIPT"],
    },
    {
      id: 4,
      title: "Carbook – Aluguel de Carros",
      description:
        "Plataforma de aluguel de veículos com filtros inteligentes e foco em usabilidade.",
      image: "/img/aluguel-carros.jpeg",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      techStack: ["NEXT.JS", "TAILWINDCSS", "HTML5"],
    },
    {
      id: 5,
      title: "Projeto Educacional SENAI",
      description:
        "Projeto acadêmico focado nos fundamentos do desenvolvimento web.",
      image: "/img/aulapresencial_senai.jpeg",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      techStack: ["HTML5", "CSS3", "BOOTSTRAP", "JAVASCRIPT"],
    },
  ]

  return (
    <section id="projects" className="relative py-28 bg-dark-light">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-neon-blue/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-neon-blue/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">Projetos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Alguns projetos que demonstram minhas habilidades em frontend, UI e UX.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {projects.map((project) => (
            <Card
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="
                group cursor-pointer
                w-full max-w-sm
                bg-dark-medium
                border border-white/10
                rounded-2xl overflow-hidden
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl hover:shadow-neon-blue/10
              "
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-[260px]">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-blue transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-neon-blue/40 text-neon-blue text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-dark max-w-5xl w-full rounded-2xl overflow-hidden relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-xl hover:text-neon-blue"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="rounded-xl overflow-hidden border border-neon-blue/30">
                <iframe
                  src={selectedProject.demoLink}
                  className="w-full h-80"
                  loading="lazy"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-neon-blue/40 text-neon-blue"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    className="px-5 py-2 bg-neon-blue text-black rounded-lg font-semibold"
                  >
                    Ver Demo
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    className="px-5 py-2 border border-neon-blue text-neon-blue rounded-lg"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
