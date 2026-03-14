import { Link } from 'react-router';
import { Music2, Headphones, Mic2, Radio, Speaker, Disc3 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export function ServicesPage() {
  const services = [
    {
      icon: Music2,
      title: 'Sound System Rental',
      description: 'Professional audio equipment for events of all sizes',
      features: [
        'Line array systems for large venues',
        'Portable PA systems',
        'Wireless microphone systems',
        'DJ equipment and mixers',
        'Professional monitors',
      ],
      pricing: 'Starting at $500/day',
    },
    {
      icon: Headphones,
      title: 'Recording Studio',
      description: 'State-of-the-art recording and mixing facilities',
      features: [
        'Multi-track recording',
        'Professional mixing and mastering',
        'Vocal booth with premium mics',
        'MIDI production suite',
        'Audio restoration services',
      ],
      pricing: 'Starting at $75/hour',
    },
    {
      icon: Mic2,
      title: 'Live Sound Engineering',
      description: 'Expert technicians for flawless live performances',
      features: [
        'FOH sound engineering',
        'Monitor mixing',
        'System tuning and optimization',
        'Wireless coordination',
        'Emergency backup support',
      ],
      pricing: 'Starting at $150/hour',
    },
    {
      icon: Radio,
      title: 'Event Production',
      description: 'Complete audio-visual production services',
      features: [
        'Full event planning',
        'Lighting design and setup',
        'Video production',
        'Stage design',
        'Technical direction',
      ],
      pricing: 'Custom quotes',
    },
    {
      icon: Speaker,
      title: 'Installation Services',
      description: 'Permanent audio system installation',
      features: [
        'Venue sound system design',
        'Installation and calibration',
        'Integration with existing systems',
        'Training and support',
        'Maintenance packages',
      ],
      pricing: 'Starting at $2,500',
    },
    {
      icon: Disc3,
      title: 'Audio Post-Production',
      description: 'Professional audio editing and enhancement',
      features: [
        'Podcast editing',
        'Voice-over recording',
        'Sound design',
        'Audio for video',
        'Jingle and ad production',
      ],
      pricing: 'Starting at $50/hour',
    },
  ];

  return (
    <div className="text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive audio solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="bg-black/40 border-white/10 hover:border-purple-500/50 transition-all"
                >
                  <CardHeader>
                    <div className="size-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4">
                      <Icon className="size-6 text-white" />
                    </div>
                    <CardTitle className="text-white">{service.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-purple-400 font-semibold">{service.pricing}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Professional Equipment</h2>
            <p className="text-gray-400 text-lg">Industry-leading brands and cutting-edge technology</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Meyer Sound', 'L-Acoustics', 'Shure', 'Sennheiser', 'QSC', 'Yamaha', 'Allen & Heath', 'Pro Tools'].map((brand, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 flex items-center justify-center"
              >
                <p className="text-gray-300 font-semibold text-center">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Every event is unique. Contact us to discuss your specific requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
