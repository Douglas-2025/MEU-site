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
        "O site da Huracán Barbearia é uma landing page moderna, com design escuro e elegante. Ele apresenta a marca, seus diferenciais, galeria de serviços e botão de agendamento online.",
      image: "/img/huracanbarber.jpg",
      demoLink: "https://huracanbarbearia.vercel.app/",
      githubLink: "https://github.com/Douglas-2025/Lading-page-barbearia",
      techStack: ["VITE", "TYPESCRIPT", "REACT", "SUPABASE", "TAILWINDCSS"],
    },
    {
      id: 2,
      title: "Holanda do Vale",
      description:
        "Site institucional da Holanda do Vale (HDV), focado em publicidade outdoor, com visual moderno e links diretos para redes sociais.",
      image: "/img/holandadovale.jpeg",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      techStack: ["HTML5", "CSS3", "BOOTSTRAP", "JAVASCRIPT"],
    },
    {
      id: 3,
      title: "Açaí Delivery",
      description:
        "Sistema completo de pedidos online para lanchonete, com cardápio visual, preços atualizados e experiência intuitiva.",
      image: "/img/Açai.jpeg",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      techStack: ["HTML5", "BOOTSTRAP", "NEXT.JS", "JAVASCRIPT", "CSS3"],
    },
    {
      id: 4,
      title: "Carbook – Aluguel de Carros",
      description:
        "Plataforma para aluguel de carros com filtros por local e datas, focada em usabilidade e rapidez na reserva.",
      image: "/img/aluguel-carros.jpeg",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      techStack: ["HTML5", "BOOTSTRAP", "NEXT.JS", "TAILWINDCSS"],
    },
    {
      id: 5,
      title: "Atividade SENAI",
      description:
        "Projeto educacional desenvolvido no SENAI com foco nos fundamentos da criação de sites.",
      image: "/img/aulapresencial_senai.jpeg",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      techStack: ["HTML5", "BOOTSTRAP", "CSS3", "JAVASCRIPT"],
    },
  ]

  return (
    <section id="projects" className="py-24 bg-dark-light relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-neon-blue/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-neon-blue/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Projetos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore meus projetos com demonstrações ao vivo e código-fonte.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card cursor-pointer overflow-hidden group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-neon-blue/40 text-neon-blue"
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
          <div className="bg-dark max-w-5xl w-full rounded-xl overflow-hidden relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-xl hover:text-neon-blue"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Preview */}
              <div className="rounded-lg overflow-hidden border border-neon-blue/30">
                <iframe
                  src={selectedProject.demoLink}
                  className="w-full h-80"
                  loading="lazy"
                />
              </div>

              {/* Info */}
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
                    className="px-4 py-2 bg-neon-blue text-black rounded-lg font-semibold"
                  >
                    Ver Demo
                  </a>

                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    className="px-4 py-2 border border-neon-blue text-neon-blue rounded-lg"
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
