"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare } from "lucide-react";

export default function CommunityWidget() {
  return (
    <section id="community" className="py-16 bg-white">

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-700">
              Connect with supporters worldwide, organize local events, and
              amplify our message.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-green-600" />
                  Organize Groups
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Start local support groups and organize fundraising events in
                  your community.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Start a Local Group
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Find Groups Near You
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-red-600" />
                  Community Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Organize solidarity events and fundraising activities in your
                  area.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Plan an Event
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  View Upcoming Events
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
