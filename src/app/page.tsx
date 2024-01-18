import Map from "@/components/Map";
import SidePanel from "@/components/SidePanel";

export default async function Home() {
  const res = await fetch(`${process.env.URL}/api/restaurants?area=중구`, {
    cache: "no-store",
  });
  const restaurants = await res.json();
  return (
    <div className="flex h-full">
      <SidePanel restaurants={restaurants} />
      <Map />
    </div>
  );
}
