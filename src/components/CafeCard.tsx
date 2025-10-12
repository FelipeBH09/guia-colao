import { MapPin, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import StarRating from "./StarRating";

export interface CafeData {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
  description: string;
  isNew?: boolean;
  hasGreca?: boolean;
}

interface CafeCardProps {
  cafe: CafeData;
  onViewMore?: (id: number) => void;
}

const CafeCard = ({ cafe, onViewMore }: CafeCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-elegant transition-smooth animate-scale-in">
      <div className="relative h-48 overflow-hidden">
        <img
          src={cafe.image}
          alt={cafe.name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        {cafe.hasGreca && (
          <div className="absolute top-3 right-3 bg-accent text-primary px-3 py-1 rounded-full shadow-gold flex items-center gap-1">
            <Award className="h-4 w-4" />
            <span className="text-sm font-semibold">Greca</span>
          </div>
        )}
        {cafe.isNew && (
          <Badge className="absolute top-3 left-3 bg-primary">Nuevo</Badge>
        )}
      </div>

      <CardContent className="p-5 space-y-3">
        <div>
          <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
            {cafe.name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <MapPin className="h-4 w-4" />
            <span>{cafe.location}</span>
          </div>
        </div>

        <StarRating rating={cafe.rating} size="sm" />

        <p className="text-sm text-muted-foreground line-clamp-2">
          {cafe.description}
        </p>

        <Button
          variant="default"
          className="w-full mt-4"
          onClick={() => onViewMore?.(cafe.id)}
        >
          Ver más
        </Button>
      </CardContent>
    </Card>
  );
};

export default CafeCard;
