"use client";

import AreaSelect from "./AreaSelect";
import RestaurantsContainer from "./RestaurantsContainer";

interface SidePanelProps {
  restaurants: any[];
}

function SidePanel({ restaurants }: SidePanelProps) {
  return (
    <div className="flex flex-col w-1/3 lg:w-1/3 h-screen overflow-y-auto bg-slate-100">
      <div className="bg-green-900 text-white px-2 py-1">Daegu Nyam</div>
      <AreaSelect />
      <RestaurantsContainer restaurants={restaurants} />
    </div>
  );
}

export default SidePanel;
