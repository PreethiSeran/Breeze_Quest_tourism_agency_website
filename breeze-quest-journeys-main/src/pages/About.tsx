import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Shield, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aaravImg from "@/assets/team/aarav.jpg";
import meeraImg from "@/assets/team/meera.jpg";
import rithikImg from "@/assets/team/rithik.jpg";

const About = () => {
  const team = [
    { name: "Aarav", role: "Founder & Explorer", description: "Passionate traveler with deep knowledge of Indian tourist spots.", image: aaravImg },
    { name: "Meera", role: "Travel Planner", description: "Expert in creating customized packages.", image: meeraImg },
    { name: "Rithik", role: "Tour Coordinator", description: "Ensures smooth and stress-free travel experiences.", image: rithikImg },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Breeze Quest</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Making travel effortless, affordable, and unforgettable for explorers across India
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-foreground text-center">Our Story</h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-center mb-8">
            Breeze Quest began with a simple mission — to make travel effortless, affordable, and unforgettable. 
            What started as a small passion for exploring new places has now grown into a trusted travel companion 
            for thousands of happy customers.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create meaningful travel experiences that inspire joy, adventure, and connection with nature.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be India's most loved eco-conscious travel guide agency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Why Choose Breeze Quest</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Tailor-made Itineraries</h3>
              <p className="text-muted-foreground text-sm">Customized travel plans for your unique needs</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Expert Guidance</h3>
              <p className="text-muted-foreground text-sm">Local insights and professional support</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Best Price Guarantee</h3>
              <p className="text-muted-foreground text-sm">Affordable packages without hidden costs</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <HeartHandshake className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">24/7 Support</h3>
              <p className="text-muted-foreground text-sm">Always here to help during your journey</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Years of Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Tours Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5000+</div>
            <div className="text-muted-foreground">Happy Travelers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
