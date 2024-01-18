"use client";

import { Restaurant } from "@/types";
import AreaSelect from "./AreaSelect";
import RestaurantsContainer from "./RestaurantsContainer";
import { useState } from "react";
import { AreaOption } from "@/data/areaOptions";

interface SidePanelProps {
  restaurants: Restaurant[];
}

function SidePanel({ restaurants }: SidePanelProps) {
  const [filteredRtrnts, setFilteredRtrnts] = useState(restaurants);
  async function handleAreaChange(area: AreaOption) {
    const res = await fetch(`/api/restaurants?area=${area.value}`);
    const newRtrnts = await res.json();
    setFilteredRtrnts(newRtrnts);
  }

  return (
    <div className="flex flex-col w-1/3 lg:w-1/3 h-screen overflow-y-auto bg-slate-100">
      <div className="bg-green-900 text-white px-2 py-1">Daegu Nyam</div>
      <AreaSelect onChange={(value) => handleAreaChange(value)} />
      <RestaurantsContainer restaurants={filteredRtrnts} />
    </div>
  );
}

export default SidePanel;
