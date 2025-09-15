import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vinayakhalavoor@gmail.com',
      href: 'mailto:vinayakhalavoor@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9353635118',
      href: 'tel:+919353635118',
      color: 'text-accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
      color: 'text-success'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-primary'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      color: 'hover:text-foreground'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center p-4 card-hover rounded-lg group"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mr-4 ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="h-5 w-5" />
                      </div>
                      
                      <div>
                        <p className="text-sm text-text-secondary">{contact.label}</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-medium mb-4 text-foreground">
                  Connect with me
                </h4>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center text-text-secondary ${social.color} transition-all duration-300 hover:scale-110 hover:bg-secondary`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col justify-center">
              <div className="card-hover p-8 rounded-lg text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Ready to collaborate?
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you have a project in mind, want to discuss opportunities, 
                  or just want to say hello, I'd love to hear from you.
                </p>
                
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={() => window.location.href = 'mailto:vinayakhalavoor@gmail.com'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send me an email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;