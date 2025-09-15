import { GraduationCap, Award, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'B.E in Computer Science',
      institution: 'BMS College of Engineering, Bangalore',
      duration: '2022 - 2026',
      grade: 'CGPA: 8.73',
      status: 'Ongoing',
      description: 'Comprehensive computer science curriculum covering software engineering, data structures, algorithms, and modern development practices.'
    },
    {
      degree: 'PUC (Pre-University Course)',
      institution: 'Konnur Science PU College, Yallatti',
      duration: '2020 - 2022',
      grade: 'Percentage: 92.5%',
      status: 'Completed',
      description: 'Science stream with focus on Physics, Chemistry, Mathematics, and Computer Science fundamentals.'
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Building a strong foundation in computer science and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="card-hover p-8 rounded-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex items-start mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary mr-4 flex-shrink-0">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold text-primary mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Side Information */}
                <div className="lg:ml-8 lg:text-right space-y-3 mt-4 lg:mt-0">
                  <div className="flex items-center lg:justify-end">
                    <Calendar className="h-4 w-4 mr-2 text-text-secondary" />
                    <span className="text-sm text-text-secondary">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center lg:justify-end">
                    <Award className="h-4 w-4 mr-2 text-text-secondary" />
                    <span className="text-sm font-semibold text-foreground">
                      {edu.grade}
                    </span>
                  </div>
                  
                  <div className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                    edu.status === 'Ongoing' 
                      ? 'bg-accent/20 text-accent' 
                      : 'bg-success/20 text-success'
                  }`}>
                    {edu.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;