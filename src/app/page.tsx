import Map from "@/components/Map";
import SidePanel from "@/components/SidePanel";

export default async function Home() {
  const res = await fetch(
    "https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=수성구"
  );
  const restaurants = await res.json();
  console.log(restaurants.data[0]);

  return (
    <div className="flex h-full">
      <SidePanel restaurants={restaurants.data} />
      <Map />
    </div>
  );
}

const sampleData = [
  {
    cnt: "1",
    OPENDATA_ID: "1815",
    GNG_CS: "대구광역시 수성구 두산동 70-1",
    FD_CS: "한식",
    BZ_NM: "곽옥자삼대곰탕",
    TLNO: "053-766-3356",
    MBZ_HR: "24시간",
    SEAT_CNT: "136",
    PKPL: "30대",
    HP: "없음",
    PSB_FRN: "가능한 외국어가 없습니다.",
    BKN_YN: "가능",
    INFN_FCL: "불가능",
    BRFT_YN: "가능",
    DSSRT_YN: "가능",
    MNU: "[저염메뉴] 곰탕 12,000원 <br /><br />나주곰탕 11,000원<br />양곰탕 16,000원<br />꼬리곰탕 25,000원<br />진주냉면 + 바싹불고기 16,000원",
    SMPL_DESC:
      "곽옥자삼대곰탕은 전통적인 전라도식 곰탕, 경상도식 곰탕, 그리고 맛있는 진주냉면까지 함께 즐길 수 있는 곰탕과 냉면 전문점입니다.",
    SBW: "주변에 가까운 지하철역이 없습니다.",
    BUS: "버스 정류장은 들안길2 정류장이 가장 가깝습니다.",
  },
  {
    cnt: "2",
    OPENDATA_ID: "1781",
    GNG_CS: "대구광역시 수성구 범물동 1277-8",
    FD_CS: "한식",
    BZ_NM: "벙글벙글식당",
    TLNO: "053-782-9571",
    MBZ_HR: "09:00 ~ 21:00",
    SEAT_CNT: "50석",
    PKPL: "없음",
    HP: "없음",
    PSB_FRN: "가능한 외국어가 없습니다.",
    BKN_YN: "가능",
    INFN_FCL: "불가능",
    BRFT_YN: "불가능",
    DSSRT_YN: "가능",
    MNU: "육개장 9,000원<br />비빔밥 9,000원<br />육국수 9.000원<br />수육 25,000원",
    SMPL_DESC:
      "벙글벙글식당 은 50년 전통에 2대에 걸쳐 운영하는 육개장, 비빔밥 전문점입니다.",
    SBW: "지하철 3호선 범물역 4번 출구에서 도보로 약 134m 거리.",
    BUS: "버스 정류장은 동아백화점수성점앞 정류장이 가장 가깝습니다.",
  },
];
