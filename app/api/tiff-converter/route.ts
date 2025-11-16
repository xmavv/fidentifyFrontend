import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const arrayBuffer = await req.arrayBuffer();
    const inputBuffer = Buffer.from(arrayBuffer);

    const pngBuffer = await sharp(inputBuffer).png().toBuffer();

    return new NextResponse(new Uint8Array(pngBuffer), {
      headers: { "Content-Type": "image/png" },
    });
  } catch (err) {
    if (err instanceof Error)
      console.error("TIFF conversion error:", err.message);
    console.error(err);
    if (err instanceof Error)
      return new NextResponse("Failed to convert TIFF: " + err.message, {
        status: 500,
      });
    return new NextResponse("Failed to convert TIFF: " + err, { status: 500 });
  }
}
