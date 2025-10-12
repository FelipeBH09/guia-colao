import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}

const StarRating = ({ rating, maxRating = 5, size = "md", showValue = true }: StarRatingProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starValue = index + 1;
    const isFilled = starValue <= Math.floor(rating);
    const isPartial = starValue === Math.ceil(rating) && rating % 1 !== 0;

    return (
      <div key={index} className="relative">
        {isPartial ? (
          <>
            <Star className={`${sizeClasses[size]} text-muted`} />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${(rating % 1) * 100}%` }}
            >
              <Star className={`${sizeClasses[size]} text-accent fill-accent`} />
            </div>
          </>
        ) : (
          <Star
            className={`${sizeClasses[size]} ${
              isFilled ? "text-accent fill-accent" : "text-muted"
            }`}
          />
        )}
      </div>
    );
  });

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">{stars}</div>
      {showValue && (
        <span className="text-sm font-medium text-foreground">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;
