export declare global {
  interface Window {
    kakao: any;
  }
}

export interface RawRestaurant {
  cnt: string;
  OPENDATA_ID: string;
  GNG_CS: string;
  FD_CS: string;
  BZ_NM: string;
  TLNO: string;
  MBZ_HR: string;
  SEAT_CNT: string;
  PKPL: string;
  HP: string;
  PSB_FRN: string;
  BKN_YN: string;
  INFN_FCL: string;
  BRFT_YN: string;
  DSSRT_YN: string;
  MNU: string;
  SMPL_DESC: string;
  SBW: string;
  BUS: string;
}

export interface Restaurant {
  id: string;
  name: string;
  foodType: string;
  address: string;
  hours: string;
  phone: string;
  description: string;
  seat: string;
  parking: string;
  menu: string[];
  website: string;
  bookingAvailability: string;
  subwayRoute: string;
  busRoute: string;
  isBreakfast: boolean;
  isDessert: boolean;
  isChildFacility: boolean;
}
