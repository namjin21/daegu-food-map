import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const area = req.nextUrl.searchParams.get("area");
  try {
    const result = await fetch(
      `https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=${area}`
    );
    const data = await result.json();

    return NextResponse.json(data.data);
  } catch (err: any) {
    // TODO: add proper error handling (e.g. toast)
  }
}
