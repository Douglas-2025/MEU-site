
import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-dark py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-neon-blue/5 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-neon-blue/10 filter blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-neon-blue/5 filter blur-3xl"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="relative mb-4">
              <p className="text-neon-blue mb-2 tracking-wider">Olá, meu nome é</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                Douglas<span className="text-neon-blue neon-glow">Júlio</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Front-end Developer & UI/UX Designer
              </p>
              <p className="text-gray-400 max-w-lg mb-8">
               Eu crio aplicações web modernas com foco em design limpo, 
               otimização de desempenho e experiências excepcionais do usuário.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="neon-button px-6 py-3 rounded-md">
              Ver Projetos  
              </a>
              <a href="#contact" className="bg-neon-blue text-dark hover:bg-neon-blue-light px-6 py-3 rounded-md transition-colors duration-300">
                Contato
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-neon-blue/20 to-transparent p-1 animate-float">
                <div className="w-full h-full rounded-full bg-dark-medium border border-neon-blue/30 flex items-center justify-center text-6xl text-neon-blue neon-glow">
                
                  <img src="/img/minha_foto_sf.png" alt="minha_foto" className='bg-neon-blue neon-glow rounded-full w-full h-full object-cover object-center'/>
                   
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 glass-card flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <span className="text-neon-blue text-4xl font-bold neon-glow">JS</span>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 glass-card flex items-center justify-center animate-float" style={{animationDelay: '1.5s'}}>
                <span className="text-neon-blue text-4xl font-bold neon-glow">TS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
