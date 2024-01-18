import { RawRestaurant, Restaurant } from "@/types";
import { NextRequest, NextResponse } from "next/server";

function convertYesNoToBool(yesOrNo: string): boolean {
  return yesOrNo === "가능";
}

function parseStrWithBrTag(str: string) {
  return str.split("<br />").filter(Boolean);
}

function getFormattedRestaurants(
  rawRestaurants: RawRestaurant[]
): Restaurant[] {
  return rawRestaurants.map((restaurant) => {
    return {
      id: restaurant.OPENDATA_ID,
      name: restaurant.BZ_NM,
      address: restaurant.GNG_CS,
      foodType: restaurant.FD_CS,
      hours: restaurant.MBZ_HR,
      phone: restaurant.TLNO,
      description: restaurant.SMPL_DESC,
      seat: restaurant.SEAT_CNT,
      parking: restaurant.PKPL,
      menu: parseStrWithBrTag(restaurant.MNU),
      website: restaurant.HP,
      bookingAvailability: restaurant.BKN_YN,
      subwayRoute: restaurant.SBW,
      busRoute: restaurant.BUS,
      isBreakfast: convertYesNoToBool(restaurant.BRFT_YN),
      isDessert: convertYesNoToBool(restaurant.DSSRT_YN),
      isChildFacility: convertYesNoToBool(restaurant.INFN_FCL),
    };
  });
}

export async function GET(req: NextRequest) {
  const area = req.nextUrl.searchParams.get("area");
  try {
    const result = await fetch(
      `https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=${area}`
    );
    const data = await result.json();
    const formattedData = getFormattedRestaurants(data.data);

    return NextResponse.json(formattedData);
  } catch (err: any) {
    // TODO: add proper error handling (e.g. toast)
  }
}
