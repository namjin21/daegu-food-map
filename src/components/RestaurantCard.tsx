interface RestaurantCardProps {
  restaurant: any;
}

function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return <li>{restaurant.BZ_NM}</li>;
}

export default RestaurantCard;
