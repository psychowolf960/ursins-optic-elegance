import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-light tracking-widest">
              OPTIQUE
              <br />
              DES URSINS
            </h3>
            <p className="text-cream/80 leading-relaxed">
              L'excellence en optique depuis 1998. 
              Votre spécialiste des montures de luxe 
              au cœur de Paris.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-medium tracking-wide">Navigation</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors duration-300">Accueil</a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors duration-300">Collections</a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors duration-300">Services</a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors duration-300">Actualités</a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors duration-300">Contact</a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-medium tracking-wide">Nos Services</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors duration-300">Examen de vue</a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors duration-300">Ajustement</a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors duration-300">Réparation</a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors duration-300">Tiers payant</a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors duration-300">Livraison</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-medium tracking-wide">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-cream/80">
                  <p>123 Avenue des Champs-Élysées</p>
                  <p>75008 Paris, France</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-cream/80">+33 1 42 65 78 90</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-cream/80">contact@optique-des-ursins.fr</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/60 text-sm">
            © 2024 Optique des Ursins. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-cream/60 hover:text-cream transition-colors duration-300">
              Mentions légales
            </a>
            <a href="#" className="text-cream/60 hover:text-cream transition-colors duration-300">
              Politique de confidentialité
            </a>
            <a href="#" className="text-cream/60 hover:text-cream transition-colors duration-300">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;