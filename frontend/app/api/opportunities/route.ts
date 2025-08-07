import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Get query params from the request
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("search") || "software";
  const page = searchParams.get("page") || "1";
  const num_pages = searchParams.get("num_pages") || "1";
  // You can add more params as needed (e.g., jobType, sort, etc.)

  const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(query)}&page=${page}&num_pages=${num_pages}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.JSEARCH_API_KEY!,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}