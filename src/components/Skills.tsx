
import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 90, category: "Frontend" },
        { name: "TypeScript", level: 85, category: "Frontend" },
        { name: "Next.js", level: 80, category: "Frontend" },
        { name: "HTML/CSS", level: 95, category: "Frontend" },
        { name: "Tailwind CSS", level: 90, category: "Frontend" },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 75, category: "Backend" },
        { name: "Express", level: 70, category: "Backend" },
        { name: "MongoDB", level: 80, category: "Backend" },
        { name: "Firebase", level: 85, category: "Backend" },
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", level: 85, category: "Tools" },
        { name: "UI/UX Design", level: 80, category: "Tools" },
        { name: "Webpack", level: 70, category: "Tools" },
        { name: "Testing (Jest)", level: 75, category: "Tools" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-dark relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/3 w-48 h-48 rounded-full bg-neon-blue/5 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-neon-blue/10 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Habilidades e Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
           Meu conjunto de habilidades técnicas e níveis de proficiência em
            várias linguagens de programação, frameworks e ferramentas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="glass-card p-6">
              <h3 className="text-xl font-bold text-neon-blue mb-6">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-neon-blue">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-light rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-neon-blue rounded-full animate-glow"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
