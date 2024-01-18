import { Restaurant } from "@/types";
import RestaurantCard from "./RestaurantCard";

interface RestaurantsContainerProps {
  restaurants: Restaurant[];
}

function RestaurantsContainer({ restaurants }: RestaurantsContainerProps) {
  return (
    <div className="h-full flex flex-col overflow-y-scroll">
      <ul>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </ul>
    </div>
  );
}

export default RestaurantsContainer;
