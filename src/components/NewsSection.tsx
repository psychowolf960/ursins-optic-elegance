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
  },
  {
    category: "ÉVÉNEMENT",
    title: "Journée Portes Ouvertes",
    excerpt: "Venez découvrir nos dernières acquisitions lors de notre journée portes ouvertes exceptionnelle avec 20% de réduction.",
    date: "22 Mars 2024",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
  },
  {
    category: "FERMETURE",
    title: "Fermeture Exceptionnelle",
    excerpt: "Notre boutique sera fermée du 28 au 30 mars pour travaux de rénovation. Réouverture avec un nouvel espace dédié aux lunettes de soleil.",
    date: "28 Mars 2024",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop"
  },
  {
    category: "NOUVEAUTÉ",
    title: "DIOR Homme Collection",
    excerpt: "Les nouvelles montures DIOR Homme arrivent en boutique. Un design architectural pour une élégance masculine affirmée.",
    date: "5 Avril 2024",
    image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=600&h=400&fit=crop"
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.slice(1).map((article, index) => (
            <Card 
              key={article.title}
              className="border-0 shadow-elegant hover:shadow-luxury transition-all duration-500 bg-card group slide-up"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs">
                  {article.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span className="text-xs tracking-wide">{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-medium text-charcoal leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <button className="flex items-center space-x-1 text-primary text-sm font-medium hover:text-accent transition-colors duration-300 group">
                    <span>Lire la suite</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 text-center fade-in">
          <Card className="border-0 shadow-luxury bg-gradient-to-r from-primary to-accent p-12 text-primary-foreground">
            <CardContent className="space-y-6">
              <h3 className="text-3xl font-serif font-light">
                Restez Informé
              </h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Inscrivez-vous à notre newsletter pour recevoir en avant-première 
                nos actualités et invitations aux événements exclusifs.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="votre.email@exemple.com"
                  className="flex-1 px-4 py-3 rounded-none bg-primary-foreground text-charcoal placeholder-muted-foreground focus:outline-none"
                />
                <button className="px-8 py-3 bg-primary-foreground text-primary font-medium hover:bg-cream transition-colors duration-300">
                  S'inscrire
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;