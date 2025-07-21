import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const news = [
  {
    category: "NOUVELLE COLLECTION",
    title: "CHANEL Eyewear Automne 2024",
    excerpt: "Découvrez la nouvelle collection CHANEL alliant tradition et modernité avec des montures en acétate premium et des détails dorés signature.",
    date: "15 Mars 2024",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=400&fit=crop",
    featured: true
  }
];

const NewsSection = () => {
  return (
    <section className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl lg:text-6xl font-serif font-light tracking-wide text-charcoal mb-6">
            Actualités &amp; <span className="text-primary">Événements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Restez informé de nos dernières collections, événements exclusifs 
            et actualités de la boutique.
          </p>
          <div className="w-24 h-px bg-primary mx-auto mt-8" />
        </div>

        {/* Featured Article */}
        <div className="mb-16 slide-up">
          <Card className="border-0 shadow-luxury overflow-hidden bg-card group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden h-64 lg:h-full">
                <img
                  src={news[0].image}
                  alt={news[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />
                <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground">
                  {news[0].category}
                </Badge>
              </div>
              
              <CardContent className="p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm tracking-wide">{news[0].date}</span>
                  </div>
                  
                  <h3 className="text-4xl font-serif font-light text-charcoal leading-tight">
                    {news[0].title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {news[0].excerpt}
                  </p>
                  
                  <button className="flex items-center space-x-2 text-primary font-medium hover:text-accent transition-colors duration-300 group">
                    <span>Lire la suite</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;