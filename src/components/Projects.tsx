
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  techStack: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Lading page barbearia com agendamento",
      description: "O site da Huracán Barbearia é uma landing page moderna, com design escuro e elegante. Ele apresenta a marca, seus diferenciais, uma galeria de imagens dos serviços, depoimentos de clientes e um botão de agendamento online. A navegação é simples, com foco em atrair e converter visitantes em clientes. No rodapé, há links para redes sociais, contato e localização.",
      image: "/img/huracanbarber.jpg",
      demoLink: "https://huracanbarbearia.vercel.app/",
      githubLink: "https://github.com/Douglas-2025/Lading-page-barbearia",
      techStack: ["VITE", "TYPESCRIPT", "REACT","SUPABASE", "TAILWINDCSS"]
    },
    {
      id: 2,
      title: "Holanda do vale ",
      description: "O site da Holanda do Vale (HDV) apresenta a empresa como referência em publicidade outdoor, destacando sua missão de conectar marcas ao público com criatividade e qualidade. Possui um visual moderno, com menu de navegação simples, seção institucional, destaque para o movimento HDV LED e informações de contato com links para Instagram e WhatsApp.",
      image: "/img/holandadovale.jpeg",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      techStack: ["HTML5", "CSS5", "BOOTSTRAP", "JAVASCRIPT"]
    },
    {
      id: 3,
      title: "Açaí Delivery",
      description: "Desenvolvi um sistema completo de pedidos online para uma lanchonete especializada em açaí, hambúrgueres e espetinhos. A aplicação permite que os clientes visualizem o cardápio com imagens reais dos produtos, preços atualizados e uma interface moderna e intuitiva.",
      image: "/img/Açai.jpeg",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      techStack: ["HTML5", "Bootstrap", "Next.js", "JavaScript", "CSS3"]
    },
    {
      id: 4,
      title: "Carbook – Plataforma de Aluguel de Carros",
      description: "Este projeto foi desenvolvido com o objetivo de facilitar o processo de aluguel de carros de forma rápida, intuitiva e moderna. A plataforma Carbook permite que os usuários encontrem veículos disponíveis, filtrem por local e datas, e realizem reservas com poucos cliques.",
      image: "/img/aluguel-carros.jpeg",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      techStack: ["HTML5", "Bootstrap", "Next.js", "JavaScript", "CSS3", "TailwindCSS"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-dark-light relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-neon-blue/10 filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-neon-blue/5 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Projetos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
           Explore meus projetos de desenvolvimento recentes com demonstrações ao vivo e código fonte. Cada projeto demonstra diferentes habilidades e tecnologias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="glass-card overflow-hidden group transition-all duration-300 hover:transform hover:translate-y-[-5px]">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="bg-dark border-neon-blue/40 text-neon-blue"
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
    </section>
  );
};

export default Projects;
