import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { destinations } from "@/data/destinations";

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
          <Button asChild>
            <Link to="/destinations">Back to Destinations</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient flex items-center justify-center">
          <h1 className="text-5xl font-bold text-primary-foreground text-center px-4">
            Explore the Beauty of {destination.name}
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* About Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">About {destination.name}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {destination.fullDescription}
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <Calendar className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Best Time to Visit</h3>
              <p className="text-muted-foreground">{destination.bestTime}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Highlights</h3>
              <ul className="text-muted-foreground space-y-1">
                {destination.highlights.slice(0, 3).map((highlight, i) => (
                  <li key={i}>• {highlight}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <Activity className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Activities</h3>
              <ul className="text-muted-foreground space-y-1">
                {destination.activities.slice(0, 3).map((activity, i) => (
                  <li key={i}>• {activity}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Activities Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Activities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {destination.activities.map((activity, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <p className="text-center font-medium text-foreground">{activity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-foreground text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src={destination.image} 
                  alt={`${destination.name} view ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore {destination.name}?</h2>
          <p className="text-lg mb-6 opacity-90">Let us plan your perfect trip!</p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Book Your Trip</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DestinationDetail;
