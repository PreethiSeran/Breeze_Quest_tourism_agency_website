import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface DestinationCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

const DestinationCard = ({ id, name, description, image }: DestinationCardProps) => {
  return (
    <Link to={`/destination/${id}`}>
      <Card className="overflow-hidden hover:shadow-card transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-foreground">{name}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DestinationCard;
