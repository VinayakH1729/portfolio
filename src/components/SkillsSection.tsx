import { Code, Database, Wrench, Globe } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C/C++', 'Python'],
      color: 'text-primary'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['React', 'Node.js', 'Express.js'],
      color: 'text-accent'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'Firebase'],
      color: 'text-success'
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'Hugging Face'],
      color: 'text-cyber-green'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-hover p-6 rounded-lg group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 p-3 rounded-full bg-secondary/50 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 bg-muted rounded-md text-sm font-medium text-muted-foreground hover:bg-surface-hover hover:text-foreground transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;