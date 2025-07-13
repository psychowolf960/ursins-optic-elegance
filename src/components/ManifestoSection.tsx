import detailImage from '@/assets/eyewear-detail.jpg';

const ManifestoSection = () => {
  return (
    <section className="py-32 px-8 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8 fade-in">
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-serif font-light tracking-wide text-charcoal">
              Notre
              <br />
              <span className="text-primary">Manifeste</span>
            </h2>
            <div className="w-24 h-px bg-primary" />
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Chez Optique des Ursins, nous croyons que la vision parfaite 
              mérite un cadre d'exception. Chaque monture est sélectionnée 
              avec le même soin qu'une œuvre d'art.
            </p>
            
            <p>
              Notre engagement envers l'excellence se traduit par un service 
              sur mesure, des ajustements précis et une attention aux détails 
              qui font toute la différence.
            </p>
            
            <p className="font-medium text-primary">
              Parce que vos yeux méritent le meilleur, nous vous offrons 
              l'expertise et la qualité des plus grandes maisons de luxe.
            </p>
          </div>

          <div className="flex items-center space-x-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-serif font-light text-primary">25+</div>
              <div className="text-sm tracking-wide text-muted-foreground">Années d'expertise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-light text-primary">50+</div>
              <div className="text-sm tracking-wide text-muted-foreground">Marques de luxe</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-light text-primary">1000+</div>
              <div className="text-sm tracking-wide text-muted-foreground">Clients satisfaits</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative slide-up">
          <div className="relative overflow-hidden">
            <img
              src={detailImage}
              alt="Détail de montures de luxe"
              className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
          </div>
          
          {/* Floating Brands */}
          <div className="absolute -bottom-8 -right-8 bg-card p-8 shadow-luxury">
            <div className="text-center space-y-4">
              <p className="text-sm tracking-widest text-muted-foreground">NOS PARTENAIRES</p>
              <div className="space-y-2 text-2xl font-serif font-light">
                <div className="text-charcoal">CHANEL</div>
                <div className="text-primary">DIOR</div>
                <div className="text-charcoal">VERSACE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;