import { ExternalLink, Github, Brain, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-powered Mental Health Chatbot',
      description: 'Developed an AI-powered chatbot to support mental health by providing personalized assistance using NLP and machine learning. Implemented sentiment analysis to detect user emotions and improve response accuracy over time.',
      technologies: ['Machine Learning', 'NLP', 'Python'],
      icon: Brain,
      color: 'text-primary',
      bgGradient: 'from-primary/20 to-accent/20'
    },
    {
      title: 'BarberBook: Mobile App for Barber Shop Reservations',
      description: 'Created a mobile app for easy barber shop reservations, featuring real-time booking, notifications, and location-based search. Used Firebase for real-time data synchronization and secure user authentication.',
      technologies: ['Flutter', 'Firebase'],
      icon: Smartphone,
      color: 'text-accent',
      bgGradient: 'from-accent/20 to-success/20'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-hover p-8 rounded-lg group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Icon */}
              <div className={`mb-6 flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${project.bgGradient} group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className={`h-8 w-8 ${project.color}`} />
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;