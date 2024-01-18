import { Restaurant } from "@/types";
import { IoLocationOutline } from "react-icons/io5";
import { GoClock, GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="flex border bg-white p-2 m-2 rounded-md overflow-auto max-h-[180px]">
      <img
        className="rounded-tr-lg rounded-bl-lg w-1/3"
        src="https://cdn.britannica.com/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg"
      />
      <div className="flex flex-col ml-2">
        <h2 className="font-bold mb-0.5">{restaurant.name}</h2>
        <p className="font-bold mb-1.5 text-[12px] text-gray-400">
          {restaurant.foodType}
        </p>
        <div className="flex mb-0.5">
          <GoLocation size={13} />
          <p className="font-bold text-xs ml-0.5">{restaurant.address}</p>
        </div>
        <div className="flex mb-0.5">
          <GoClock size={13} />
          <p className="font-bold text-xs ml-0.5">{restaurant.hours}</p>
        </div>
        <div className="flex">
          <FiPhone size={13} />
          <p className="font-bold text-xs ml-0.5">{restaurant.phone}</p>
        </div>
        <p className="text-xs mt-1.5 text-gray-500 overflow-y-auto">
          {restaurant.description}
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;
