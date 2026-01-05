"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Calendar,
  Clock,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { AddToCalendarButton } from "add-to-calendar-button-react";

// Event type badge themes (matching events-section.tsx)
const eventThemes = {
  "March": {
    badge: "March",
    badgeColor: "bg-red-600",
    borderColor: "border-red-200",
  },
  "Fundraiser": {
    badge: "Fundraiser",
    badgeColor: "bg-green-600",
    borderColor: "border-green-200",
  },
  "Meeting": {
    badge: "Meeting",
    badgeColor: "bg-blue-600",
    borderColor: "border-blue-200",
  },
  "Workshop": {
    badge: "Workshop",
    badgeColor: "bg-purple-600",
    borderColor: "border-purple-200",
  },
  "Community": {
    badge: "Community",
    badgeColor: "bg-orange-600",
    borderColor: "border-orange-200",
  }
};

interface EventDetailPageProps {
  event: any;
}

export default function EventDetailPage({ event }: EventDetailPageProps) {
  const theme = eventThemes[event.eventType as keyof typeof eventThemes] || eventThemes["Community"];

  // Use home page banner for hero
  const heroBannerImage = "/thousand-madleens-banner.jpg";

  // Format date and time for display from ISO datetime
  const formatDate = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const displayDate = event.dateTime ? formatDate(event.dateTime) : event.date || '';
  const displayTime = event.dateTime ? formatTime(event.dateTime) : event.time || '';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Same as home page */}
      <section className="relative h-96 bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBannerImage}
            alt="Thousand Madleens to Gaza"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 "></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className={`${theme.badgeColor} text-white mb-4`}>
              {event.eventType}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {event.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/#events">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </Link>
        </div>

        {/* Event Metadata */}
        <motion.div
          className="mb-8 p-6 bg-gray-50 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="h-5 w-5 text-green-600" />
              <span className="font-medium">{event.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="h-5 w-5 text-green-600" />
              <span className="font-medium">{displayDate}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="h-5 w-5 text-green-600" />
              <span className="font-medium">{displayTime}</span>
            </div>

            {/* Add to Calendar Button */}
            <div className="ml-auto">
              <AddToCalendarButton
                  name={event.title}
                  startDate={event.dateTime.split('T')[0]}
                  startTime={event.dateTime.split('T')[1]}
                  endTime={event.endTime || "23:00"}
                  timeZone="Europe/London"
                  location={event.location}
                  description={event.shortDescription}
                  options="'Apple','Google','iCal','Outlook.com','Microsoft 365'"
                  lightMode="bodyScheme"
              />
            </div>
          </div>
        </motion.div>

        {/* Full Description */}
        <motion.div
          className="prose prose-lg max-w-none mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {event.fullDescription}
          </div>
        </motion.div>

        {/* Event Image Inline */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <img
            src={event.image}
            alt={event.title}
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Bottom Navigation */}
        <motion.div
          className="border-t border-gray-200 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/#events">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Events
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
