import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";
import heroImage from "@/assets/hero-mountain.jpg";

const Index = () => {
  const featuredDestinations = destinations.slice(0, 6);
  
  const testimonials = [
    { name: "Kavya S.", text: "Breeze Quest planned my Goa trip perfectly! Everything from resort booking to activities was beautifully arranged.", rating: 5 },
    { name: "Arjun P.", text: "The trip to Munnar was so peaceful. Their service was smooth and the experience was worth every moment.", rating: 5 },
    { name: "Priya N.", text: "Loved the customized itinerary! They took care of every detail for our family vacation.", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Mountain landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-gradient"></div>
        </div>
        <div className="relative z-10 text-primary-foreground px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Explore the World with Breeze Quest</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Your trusted travel companion for unforgettable journeys.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Plan Your Trip</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">Tours Completed</div>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-sm opacity-90">Happy Travelers</div>
            </div>
            <div>
              <Star className="w-8 h-8 mx-auto mb-2" />
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Destinations</h2>
          <p className="text-muted-foreground text-lg">Discover the most beautiful places in India</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              id={dest.id}
              name={dest.name}
              description={dest.shortDescription}
              image={dest.image}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/destinations">View All Destinations</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What Our Travelers Say</h2>
            <p className="text-muted-foreground text-lg">Real experiences from real people</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Top Recommendations</h2>
          <p className="text-muted-foreground text-lg">Handpicked destinations for every traveler</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="hover:shadow-card transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Best for Families</h3>
              <p className="text-muted-foreground mb-4">Munnar, Jaipur, Andaman</p>
              <Button variant="link" className="p-0" asChild>
                <Link to="/recommendations">Explore More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-card transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Best for Solo Travelers</h3>
              <p className="text-muted-foreground mb-4">Goa, Rishikesh, Darjeeling</p>
              <Button variant="link" className="p-0" asChild>
                <Link to="/recommendations">Explore More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
