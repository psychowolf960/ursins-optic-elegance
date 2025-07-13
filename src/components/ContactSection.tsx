import { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import interiorImage from '@/assets/boutique-interior.jpg';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="py-32 px-8 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl lg:text-6xl font-serif font-light tracking-wide text-charcoal mb-6">
            Nous <span className="text-primary">Contacter</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Notre équipe d'experts vous accueille dans un cadre d'exception 
            au cœur de la ville pour vous offrir un service personnalisé.
          </p>
          <div className="w-24 h-px bg-primary mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 slide-up">
            {/* Boutique Image */}
            <div className="relative overflow-hidden rounded-none shadow-elegant">
              <img
                src={interiorImage}
                alt="Intérieur de la boutique Optique des Ursins"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border-0 shadow-elegant bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-serif font-medium text-charcoal mb-2">Adresse</h3>
                      <p className="text-muted-foreground">
                        123 Avenue des Champs-Élysées<br />
                        75008 Paris, France
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-serif font-medium text-charcoal mb-2">Téléphone</h3>
                      <p className="text-muted-foreground">+33 1 42 65 78 90</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-serif font-medium text-charcoal mb-2">Horaires</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lundi - Vendredi: 9h00 - 19h00</p>
                        <p>Samedi: 9h00 - 18h00</p>
                        <p>Dimanche: Fermé</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-serif font-medium text-charcoal mb-2">Email</h3>
                      <p className="text-muted-foreground">contact@optique-des-ursins.fr</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-up">
            <Card className="border-0 shadow-luxury bg-card">
              <CardContent className="p-8">
                <h3 className="text-3xl font-serif font-light text-charcoal mb-8">
                  Prendre Rendez-vous
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Nom complet
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-muted focus:border-primary"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Téléphone
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-muted focus:border-primary"
                        placeholder="Votre téléphone"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-muted focus:border-primary"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-muted focus:border-primary"
                      placeholder="Décrivez vos besoins ou preferences..."
                    />
                  </div>
                  
                  <Button type="submit" className="btn-luxury w-full">
                    Envoyer la Demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;