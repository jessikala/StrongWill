import { Calendar, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: string;
  imageUrl: string;
  category: string;
}

export function EventCard({ title, date, location, attendees, imageUrl, category }: EventCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer bg-black/40 border-white/10 hover:border-purple-500/50 transition-all">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <Badge className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700">
          {category}
        </Badge>
      </div>
      <CardContent className="p-4 space-y-3">
        <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="size-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="size-4" />
            <span>{attendees}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
