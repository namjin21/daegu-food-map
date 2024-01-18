import { Restaurant } from "@/types";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return <li>{restaurant.BZ_NM}</li>;
}

export default RestaurantCard;
