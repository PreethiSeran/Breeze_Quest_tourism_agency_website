import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const reviews = [
    { name: "Kavya S.", text: "Breeze Quest planned my Goa trip perfectly! Everything from resort booking to activities was beautifully arranged.", rating: 5 },
    { name: "Arjun P.", text: "The trip to Munnar was so peaceful. Their service was smooth and the experience was worth every moment.", rating: 5 },
    { name: "Priya N.", text: "Loved the customized itinerary! They took care of every detail for our family vacation.", rating: 5 },
    { name: "Rohan M.", text: "Very friendly team and well-organized travel experience. Highly recommended!", rating: 5 },
    { name: "Sharmila R.", text: "Affordable packages and great recommendations. Their Pondicherry trip plan was amazing!", rating: 5 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your review! We appreciate your feedback.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Customer Reviews</h1>
          <p className="text-muted-foreground text-lg">Real experiences from our happy travelers</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{review.text}"</p>
                <p className="font-semibold text-foreground">- {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-foreground text-center">Share Your Experience</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Your Review</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your experience..."
                    rows={6}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Reviews;
