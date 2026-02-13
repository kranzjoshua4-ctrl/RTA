import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  revalidatePath("/");
  revalidatePath("/leistungen");
  revalidatePath("/branchen");
  revalidatePath("/projekte");
  revalidatePath("/karriere");
  revalidatePath("/zertifikate-compliance");

  return NextResponse.json({ revalidated: true });
}
