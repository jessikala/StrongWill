import { useState } from 'react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  event: string;
}

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const images: GalleryImage[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1740458983830-24bfc1118a05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodGluZ3xlbnwxfHx8fDE3NzM1MTAwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Concert Stage Lighting',
      category: 'Concert',
      event: 'Rock Festival 2026',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1708569176813-746f00614012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZGFuY2UlMjBmbG9vcnxlbnwxfHx8fDE3NzMzOTI4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Wedding Reception',
      category: 'Wedding',
      event: 'Sarah & John Wedding',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1719650932798-bda508a2b209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMHN0YWdlJTIwcGVyZm9ybWFuY2V8ZW58MXx8fHwxNzczNTEwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Festival Stage Performance',
      category: 'Festival',
      event: 'Summer Music Fest',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1660795308754-4c6422baf2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBjb25mZXJlbmNlJTIwc3BlYWtlcnN8ZW58MXx8fHwxNzczNTEwMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Corporate Conference',
      category: 'Corporate',
      event: 'Tech Summit 2026',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1588418138111-c8f8c7d9cb0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW8lMjBzZXNzaW9ufGVufDF8fHx8MTc3MzQxODg2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Recording Studio Session',
      category: 'Studio',
      event: 'Album Production',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1561264819-ec6538dc260e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwYmFuZCUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3MzUxMDA4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Live Band Performance',
      category: 'Concert',
      event: 'Jazz Night',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1766111242568-d935ea63f32f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZXMlMjBwYXJ0eXxlbnwxfHx8fDE3NzM1MTAwODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'DJ Party Setup',
      category: 'Party',
      event: 'New Year Bash',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1764670085300-7951b9132433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwbXVzaWMlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NzM0MTQ4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Outdoor Music Festival',
      category: 'Festival',
      event: 'Sunset Festival',
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1657038688392-4700c79d9771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VuZCUyMGVuZ2luZWVyJTIwbWl4aW5nfGVufDF8fHx8MTc3MzUxMDA4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sound Engineer at Work',
      category: 'Production',
      event: 'Live Concert',
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1686213456023-373643ae253b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBoYW5kcyUyMHVwfGVufDF8fHx8MTc3MzUxMDA4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Crowd Energy',
      category: 'Concert',
      event: 'EDM Festival',
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1566153428059-c4c8edc63c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBtaWNyb3Bob25lJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzM1MTAwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Studio Microphone',
      category: 'Studio',
      event: 'Vocal Recording',
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1764593605450-15d6fc79a2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHByb2R1Y3Rpb24lMjBiYWNrc3RhZ2V8ZW58MXx8fHwxNzczNTEwMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Backstage Production',
      category: 'Production',
      event: 'Corporate Event',
    },
    {
      id: 13,
      url: 'https://images.unsplash.com/photo-1763420952993-23a57c37c2ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb3VuZCUyMHN5c3RlbSUyMGNvbmNlcnR8ZW58MXx8fHwxNzczNTA4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Professional Sound System',
      category: 'Concert',
      event: 'Rock Festival',
    },
    {
      id: 14,
      url: 'https://images.unsplash.com/photo-1675171155224-e70a5eeb27c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBldmVudCUyMHN0YWdlfGVufDF8fHx8MTc3MzQyODMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Live Event Stage',
      category: 'Concert',
      event: 'Concert Series',
    },
    {
      id: 15,
      url: 'https://images.unsplash.com/photo-1638727317606-17990c9e973d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMG1peGluZyUyMGNvbnNvbGV8ZW58MXx8fHwxNzczNTA4Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'DJ Mixing Console',
      category: 'Party',
      event: 'DJ Night',
    },
  ];

  const categories = ['all', 'Concert', 'Festival', 'Wedding', 'Corporate', 'Studio', 'Party', 'Production'];

  const filteredImages = filterCategory === 'all' 
    ? images 
    : images.filter(img => img.category === filterCategory);

  return (
    <div className="text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Event Gallery</h1>
          <p className="text-gray-300 text-lg">
            A visual journey through our most memorable events
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilterCategory(category)}
              variant={filterCategory === category ? 'default' : 'outline'}
              className={
                filterCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                  : 'border-white/20 hover:bg-white/10'
              }
            >
              {category === 'all' ? 'All' : category}
            </Button>
          ))}
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-black/40 border border-white/10 hover:border-purple-500/50 transition-all"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <Badge className="mb-2 bg-purple-600">{image.category}</Badge>
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="size-6" />
            </button>
            <div className="max-w-6xl w-full">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="mt-4 text-center">
                <Badge className="mb-2 bg-purple-600">{selectedImage.category}</Badge>
                <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.event}</p>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <section className="mt-20 py-12 rounded-2xl bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Our Impact</h2>
            <p className="text-gray-400">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Events Captured</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-gray-300">Hours of Coverage</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Venues</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">100K+</div>
              <div className="text-gray-300">Attendees Served</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
