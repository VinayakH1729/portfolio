import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Research Intern',
      company: 'Altair Engineering',
      duration: 'March 2025 - July 2025',
      location: 'Remote',
      description: [
        'Developed a smart grid optimization model to enhance energy efficiency in power distribution networks.',
        'Contributed to achieving 88.8% renewable energy utilization and a 44.5% reduction in grid imports through advanced optimization algorithms.',
        'Applied machine learning and optimization techniques to improve grid stability and reduce operational costs.',
        'Utilized Python within a reinforcement learning framework for model development, training, and visualization.'
      ],
      technologies: ['Machine Learning', 'Optimization', 'Python'],
      isUpcoming: true
    },
    {
      role: 'Virtual Software Engineer',
      company: 'J.P. Morgan (Forage)',
      duration: 'Completed',
      location: 'Virtual Experience',
      description: [
        'Built a backend system to process financial transactions using Kafka and an in-memory H2 database.',
        'Integrated an external Incentive API to enrich transaction data and adjust account balances.',
        'Developed a REST API using Spring Boot to expose real-time account balances.'
      ],
      technologies: ['Spring Boot', 'Kafka', 'REST APIs', 'H2 DB'],
      isUpcoming: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Building expertise through hands-on projects and real-world applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {experiences.map((experience, index) => (
              <div key={index} className="relative flex mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                {/* Content */}
                <div className="ml-20 w-full">
                  <div className="card-hover p-6 rounded-lg">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {experience.role}
                        </h3>
                        <p className="text-lg font-semibold text-primary">
                          {experience.company}
                        </p>
                      </div>
                      
                      <div className="flex flex-col md:items-end text-sm text-text-secondary mt-2 md:mt-0">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className={experience.isUpcoming ? 'text-accent font-medium' : ''}>
                            {experience.duration}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4 text-muted-foreground">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;