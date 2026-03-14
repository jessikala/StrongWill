import { useState } from 'react';
import { EventCard } from '../components/EventCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search } from 'lucide-react';

export function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

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
    {
      id: 7,
      title: 'Rock Band Tour 2026',
      date: 'August 12, 2026',
      location: 'Stadium Arena',
      attendees: '15,000+',
      imageUrl: 'https://images.unsplash.com/photo-1763420952993-23a57c37c2ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzb3VuZCUyMHN5c3RlbSUyMGNvbmNlcnR8ZW58MXx8fHwxNzczNTA4Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Concert',
    },
    {
      id: 8,
      title: 'Annual Gala Dinner',
      date: 'September 20, 2026',
      location: 'Luxury Hotel',
      attendees: '500+',
      imageUrl: 'https://images.unsplash.com/photo-1712971404080-87271ce2e473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHNwZWFrZXJzfGVufDF8fHx8MTc3MzUwODY5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Corporate',
    },
    {
      id: 9,
      title: 'Jazz Evening',
      date: 'October 5, 2026',
      location: 'Jazz Lounge',
      attendees: '300+',
      imageUrl: 'https://images.unsplash.com/photo-1557695126-fa2ce36f6828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMG1peGluZyUyMGJvYXJkfGVufDF8fHx8MTc3MzUwODY5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Concert',
    },
    {
      id: 10,
      title: 'Charity Fundraiser',
      date: 'November 14, 2026',
      location: 'Community Center',
      attendees: '800+',
      imageUrl: 'https://images.unsplash.com/photo-1675171155224-e70a5eeb27c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBldmVudCUyMHN0YWdlfGVufDF8fHx8MTc3MzQyODMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Festival',
    },
    {
      id: 11,
      title: 'Electronic Music Festival',
      date: 'December 1-3, 2026',
      location: 'Outdoor Venue',
      attendees: '20,000+',
      imageUrl: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MXx8fHwxNzczNDM4NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Festival',
    },
    {
      id: 12,
      title: 'New Year\'s Eve Bash',
      date: 'December 31, 2026',
      location: 'City Square',
      attendees: '3,000+',
      imageUrl: 'https://images.unsplash.com/photo-1638727317606-17990c9e973d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMG1peGluZyUyMGNvbnNvbGV8ZW58MXx8fHwxNzczNTA4Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Club',
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || event.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'Festival', 'Concert', 'Corporate', 'Wedding', 'Club', 'Studio'];

  return (
    <div className="text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Our Events</h1>
          <p className="text-gray-300 text-lg">
            Browse through our portfolio of successful events
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <Input
              placeholder="Search events by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-black/40 border-white/20 text-white"
            />
          </div>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-full md:w-[200px] bg-black/40 border-white/20 text-white">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
          </p>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-4">No events found matching your criteria</p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setFilterCategory('all');
              }}
              variant="outline"
              className="border-white/20 hover:bg-white/10"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Stats Section */}
        <section className="mt-20 py-12 rounded-2xl bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Events Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">100K+</div>
              <div className="text-gray-300">Happy Attendees</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}