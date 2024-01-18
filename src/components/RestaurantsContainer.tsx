import { Restaurant } from "@/types";
import RestaurantCard from "./RestaurantCard";

interface RestaurantsContainerProps {
  restaurants: Restaurant[];
}

function RestaurantsContainer({ restaurants }: RestaurantsContainerProps) {
  return (
    <div className="h-full flex flex-col">
      <ul>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.OPENDATA_ID}
            restaurant={restaurant}
          />
        ))}
      </ul>
    </div>
  );
}

export default RestaurantsContainer;
