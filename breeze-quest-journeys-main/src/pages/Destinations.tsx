import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";

const Destinations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Explore Our Destinations</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover incredible places across India, from serene hill stations to vibrant beaches and cultural heritage sites.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              id={dest.id}
              name={dest.name}
              description={dest.shortDescription}
              image={dest.image}
            />
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Destinations;
