import { Link } from 'react-router';
import { ArrowRight, Music2, Headphones, Mic2, Radio, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { EventCard } from '../components/EventCard';

export function HomePage() {
  const events = [
    {
      id: 1,
      title: 'Summer Music Festival 2026',
      date: 'June 15-17, 2026',
      location: 'Central Park Arena',
      attendees: '10,000+',
      imageUrl: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MXx8fHwxNzczNDM4NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Festival',
    },
    {
      id: 2,
      title: 'Tech Conference 2026',
      date: 'April 22, 2026',
      location: 'Convention Center',
      attendees: '5,000+',
      imageUrl: 'https://images.unsplash.com/photo-1712971404080-87271ce2e473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHNwZWFrZXJzfGVufDF8fHx8MTc3MzUwODY5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Corporate',
    },
    {
      id: 3,
      title: 'Wedding Celebration',
      date: 'May 10, 2026',
      location: 'Grand Hotel Ballroom',
      attendees: '250+',
      imageUrl: 'https://images.unsplash.com/photo-1764269719300-7094d6c00533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGFydHklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzM1MDg2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Wedding',
    },
    {
      id: 4,
      title: 'Live Concert Series',
      date: 'March 28, 2026',
      location: 'Downtown Theater',
      attendees: '2,000+',
      imageUrl: 'https://images.unsplash.com/photo-1675171155224-e70a5eeb27c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBldmVudCUyMHN0YWdlfGVufDF8fHx8MTc3MzQyODMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Concert',
    },
    {
      id: 5,
      title: 'DJ Night Extravaganza',
      date: 'July 5, 2026',
      location: 'Beach Club',
      attendees: '1,500+',
      imageUrl: 'https://images.unsplash.com/photo-1638727317606-17990c9e973d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMG1peGluZyUyMGNvbnNvbGV8ZW58MXx8fHwxNzczNTA4Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Club',
    },
    {
      id: 6,
      title: 'Pro Audio Recording Sessions',
      date: 'Ongoing',
      location: 'Daniel Sound Pro Studios',
      attendees: 'Private',
      imageUrl: 'https://images.unsplash.com/photo-1772399764232-c35bac262ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW8lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzczNTA4Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Studio',
    },
  ];

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1763420952993-23a57c37c2ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb3VuZCUyMHN5c3RlbSUyMGNvbmNlcnR8ZW58MXx8fHwxNzczNTA4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional Sound System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-purple-900/50 to-black/90" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Professional Sound Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Premium sound systems and recording services for concerts, weddings, corporate events, and more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg"
            >
              <Link to="/booking">
                Book Now <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg border-white/20 hover:bg-white/10">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg">Everything you need for the perfect audio experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <Music2 className="size-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sound System Rental</h3>
              <p className="text-gray-400">Professional-grade audio equipment for any event size</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <Headphones className="size-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Recording Studio</h3>
              <p className="text-gray-400">State-of-the-art recording and mixing facilities</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <Mic2 className="size-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Sound Engineering</h3>
              <p className="text-gray-400">Expert technicians for flawless live performances</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <Radio className="size-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Event Production</h3>
              <p className="text-gray-400">Complete audio-visual production services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Recent Events</h2>
              <p className="text-gray-400 text-lg">Check out our latest projects and upcoming events</p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex border-white/20 hover:bg-white/10">
              <Link to="/events">
                View All Events <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="border-white/20 hover:bg-white/10">
              <Link to="/events">
                View All Events <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Daniel Sound Pro?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Professional Equipment</h3>
                    <p className="text-gray-400">Top-of-the-line audio gear from industry-leading brands</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expert Team</h3>
                    <p className="text-gray-400">Certified sound engineers with 10+ years of experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">24/7 Support</h3>
                    <p className="text-gray-400">Round-the-clock technical support for your events</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Competitive Pricing</h3>
                    <p className="text-gray-400">Flexible packages to fit any budget</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">On-Time Delivery</h3>
                    <p className="text-gray-400">Guaranteed setup and teardown on schedule</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557695126-fa2ce36f6828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMG1peGluZyUyMGJvYXJkfGVufDF8fHx8MTc3MzUwODY5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Audio Mixing Board"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 text-lg">Hear from those who experienced our services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold">
                  SM
                </div>
                <div>
                  <h3 className="font-semibold">Sarah Martinez</h3>
                  <p className="text-sm text-gray-400">Wedding Client</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300">
                "Daniel Sound Pro made our wedding absolutely perfect! The sound quality was incredible and their team was so professional. They went above and beyond to ensure everything ran smoothly."
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold">
                  JC
                </div>
                <div>
                  <h3 className="font-semibold">James Chen</h3>
                  <p className="text-sm text-gray-400">Festival Organizer</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300">
                "We've worked with Daniel Sound Pro for three years running our summer festival. Their expertise and top-tier equipment are unmatched. Highly recommend for any large-scale event!"
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold">
                  ER
                </div>
                <div>
                  <h3 className="font-semibold">Emily Rodriguez</h3>
                  <p className="text-sm text-gray-400">Corporate Event Manager</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300">
                "Outstanding service! They handled our tech conference with 5,000+ attendees flawlessly. The sound was crystal clear throughout the venue. Will definitely use them again!"
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold">
                  MT
                </div>
                <div>
                  <h3 className="font-semibold">Marcus Thompson</h3>
                  <p className="text-sm text-gray-400">Music Artist</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300">
                "Recorded my entire album at Daniel Sound Pro Studios. The equipment is world-class and the engineers know their craft. They brought my vision to life perfectly!"
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold">
                  LP
                </div>
                <div>
                  <h3 className="font-semibold">Lisa Park</h3>
                  <p className="text-sm text-gray-400">Concert Promoter</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300">
                "I've worked with many audio companies, but Daniel Sound Pro stands out. Their attention to detail and commitment to excellence makes every show a success. True professionals!"
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-full bg-purple-600 flex items-center justify-center text-xl font-bold">
                  DW
                </div>
                <div>
                  <h3 className="font-semibold">David Wilson</h3>
                  <p className="text-sm text-gray-400">Club Owner</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300">
                "Daniel Sound Pro installed our club's sound system and it's phenomenal! The bass is tight, the clarity is perfect, and our customers love it. Best investment we've made!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/40 to-pink-900/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make Your Event Unforgettable?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Get a free quote today and let us help you create the perfect audio experience
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-purple-900 hover:bg-gray-100 text-lg"
          >
            <Link to="/booking">
              Get Started <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}