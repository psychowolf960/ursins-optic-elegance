import { Eye, Heart, Shield, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Eye,
    title: "Examen de Vue Complet",
    description: "Diagnostic précis avec les dernières technologies d'imagerie rétinienne et d'analyse cornéenne.",
    features: ["OCT haute résolution", "Topographie cornéenne", "Fond d'œil numérique"]
  },
  {
    icon: Shield,
    title: "Tiers Payant Santé",
    description: "Prise en charge directe avec votre mutuelle. Simplicité et transparence garanties.",
    features: ["Toutes mutuelles", "Devis transparent", "Remboursement optimisé"]
  },
  {
    icon: Sparkles,
    title: "Ajustement Sur Mesure",
    description: "Chaque monture est ajustée parfaitement à votre morphologie par nos maîtres opticiens.",
    features: ["Ajustement précis", "Centrage optimal", "Confort maximal"]
  },
  {
    icon: Heart,
    title: "Service Privilège",
    description: "Un accompagnement personnalisé pour une expérience d'exception du conseil à l'entretien.",
    features: ["Conseil personnalisé", "Livraison possible", "Entretien inclus"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl lg:text-6xl font-serif font-light tracking-wide text-charcoal mb-6">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une expertise reconnue au service de votre vision, 
            avec l'élégance et la précision qui font notre réputation.
          </p>
          <div className="w-24 h-px bg-primary mx-auto mt-8" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group border-0 shadow-elegant hover:shadow-luxury transition-all duration-500 bg-card slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-serif font-medium text-charcoal">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in">
          <button className="btn-luxury">
            Découvrir Tous Nos Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;