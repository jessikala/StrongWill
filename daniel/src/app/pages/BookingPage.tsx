import { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Mail, Phone, User } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';

export function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    location: '',
    attendees: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    toast.success('Booking request submitted! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      eventTime: '',
      location: '',
      attendees: '',
      service: '',
      message: '',
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Book Your Event</h1>
          <p className="text-gray-300 text-lg">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <Card className="lg:col-span-2 bg-black/40 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Event Details</CardTitle>
              <CardDescription className="text-gray-400">
                Tell us about your event and requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white flex items-center gap-2">
                      <User className="size-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="bg-black/60 border-white/20 text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white flex items-center gap-2">
                      <Mail className="size-4" />
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="bg-black/60 border-white/20 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white flex items-center gap-2">
                    <Phone className="size-4" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="bg-black/60 border-white/20 text-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Event Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventType" className="text-white">
                      Event Type *
                    </Label>
                    <Select value={formData.eventType} onValueChange={(value) => handleChange('eventType', value)}>
                      <SelectTrigger className="bg-black/60 border-white/20 text-white">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="concert">Concert</SelectItem>
                        <SelectItem value="festival">Festival</SelectItem>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="party">Private Party</SelectItem>
                        <SelectItem value="recording">Recording Session</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-white">
                      Service Required *
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                      <SelectTrigger className="bg-black/60 border-white/20 text-white">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sound-rental">Sound System Rental</SelectItem>
                        <SelectItem value="recording">Recording Studio</SelectItem>
                        <SelectItem value="live-engineer">Live Sound Engineering</SelectItem>
                        <SelectItem value="production">Event Production</SelectItem>
                        <SelectItem value="installation">Installation Services</SelectItem>
                        <SelectItem value="post-production">Audio Post-Production</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate" className="text-white flex items-center gap-2">
                      <Calendar className="size-4" />
                      Event Date *
                    </Label>
                    <Input
                      id="eventDate"
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={(e) => handleChange('eventDate', e.target.value)}
                      className="bg-black/60 border-white/20 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventTime" className="text-white flex items-center gap-2">
                      <Clock className="size-4" />
                      Event Time *
                    </Label>
                    <Input
                      id="eventTime"
                      type="time"
                      required
                      value={formData.eventTime}
                      onChange={(e) => handleChange('eventTime', e.target.value)}
                      className="bg-black/60 border-white/20 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-white flex items-center gap-2">
                    <MapPin className="size-4" />
                    Event Location *
                  </Label>
                  <Input
                    id="location"
                    required
                    value={formData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    className="bg-black/60 border-white/20 text-white"
                    placeholder="123 Main St, City, State"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attendees" className="text-white flex items-center gap-2">
                    <Users className="size-4" />
                    Expected Attendees *
                  </Label>
                  <Select value={formData.attendees} onValueChange={(value) => handleChange('attendees', value)}>
                    <SelectTrigger className="bg-black/60 border-white/20 text-white">
                      <SelectValue placeholder="Select number of attendees" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50">0-50</SelectItem>
                      <SelectItem value="51-100">51-100</SelectItem>
                      <SelectItem value="101-250">101-250</SelectItem>
                      <SelectItem value="251-500">251-500</SelectItem>
                      <SelectItem value="501-1000">501-1000</SelectItem>
                      <SelectItem value="1000+">1000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="bg-black/60 border-white/20 text-white min-h-[100px]"
                    placeholder="Tell us more about your event, specific requirements, budget, etc."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <Phone className="size-5 text-purple-400 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="size-6 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p>info@danielsoundpro.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 text-purple-400 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p>123 Audio Street<br />Music City, MC 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white">Quick Response</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">We typically respond to booking requests within 24 hours.</p>
                <p>For urgent requests, please call us directly.</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}