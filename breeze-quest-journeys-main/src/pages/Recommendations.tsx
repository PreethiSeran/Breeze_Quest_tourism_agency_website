import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Heart, DollarSign, Leaf, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Recommendations = () => {
  const categories = [
    {
      icon: TrendingUp,
      title: "Top 5 Must-Visit Places This Season",
      destinations: ["Munnar", "Pondicherry", "Andaman", "Jaipur", "Coorg"],
      description: "The most popular destinations loved by travelers this season"
    },
    {
      icon: DollarSign,
      title: "Budget-Friendly Picks",
      destinations: ["Ooty", "Rishikesh", "Alleppey"],
      description: "Amazing experiences without breaking the bank"
    },
    {
      icon: Users,
      title: "Best for Solo Travelers",
      destinations: ["Goa", "Rishikesh", "Darjeeling"],
      description: "Safe, exciting destinations perfect for solo adventures"
    },
    {
      icon: Heart,
      title: "Best for Families",
      destinations: ["Munnar", "Jaipur", "Andaman"],
      description: "Family-friendly spots with activities for all ages"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly / Nature Trips",
      destinations: ["Coorg", "Alleppey", "Darjeeling"],
      description: "Sustainable travel with minimal environmental impact"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Travel Recommendations</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Curated suggestions to help you find the perfect destination for your next adventure
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {categories.map((category, i) => (
            <Card key={i}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-foreground">{category.title}</h2>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.destinations.map((dest, j) => (
                        <span 
                          key={j}
                          className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" asChild>
                      <Link to="/destinations">Explore These Destinations</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Recommendations?</h2>
          <p className="text-lg mb-6 opacity-90">Let our experts help you plan the perfect trip</p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Recommendations;
