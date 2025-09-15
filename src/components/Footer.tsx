import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-text-secondary text-sm mb-4 md:mb-0">
            © 2024 Vinayak V Halavoor. All rights reserved.
          </div>
          
          <div className="flex items-center text-text-secondary text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 mx-1 text-destructive" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;