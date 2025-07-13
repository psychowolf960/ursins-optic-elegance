import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-eyewear.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img
          src={heroImage}
          alt="Luxury eyewear collection"
          className="w-full h-full object-cover parallax-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/60 via-primary/40 to-accent/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-8">
        <div className="text-center text-background fade-in">
          <h1 className="heading-luxury text-background mb-8">
            OPTIQUE
            <br />
            DES URSINS
          </h1>
          
          <p className="subheading-luxury text-background/90 mb-12 max-w-2xl mx-auto">
            Where sophistication meets precision in luxury eyewear
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-translucent slide-up">
              Découvrir la Collection
            </Button>
            <Button variant="outline" className="btn-translucent slide-up">
              Prendre Rendez-vous
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-background/70">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-serif tracking-widest">SCROLL</span>
          <div className="w-px h-16 bg-background/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;