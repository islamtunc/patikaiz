// Bismillahirahmanirahim
// Elhamdullillahirabbulalemin
//Es-selatu vesselamu ala rasulina Muhammedin 
// La ilahe illallah, Muhammeden Abduhu ve Resuluhu
// Suphanallah velhamdulillah, Allahu Ekber



import prisma from "@/pirtukxane/prisma";
import { getMmavahiDataInclude,MmavahiPage} from "@/pirtukxane/types";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const cursor = req.nextUrl.searchParams.get("cursor") || undefined;

    const pageSize = 10;

   

    const posts = await prisma.mmavahi.findMany({
      include: getMmavahiDataInclude(""),
      orderBy: { createdAt: "desc" },
      take: pageSize + 1,
      cursor: cursor ? { id: cursor } : undefined,
    });

    const nextCursor = posts.length > pageSize ? posts[pageSize].id : null;

    const data: MmavahiPage = {
      posts: posts.slice(0, pageSize),
      nextCursor,
    };

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
