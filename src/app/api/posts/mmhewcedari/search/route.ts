// Bismillahirrahmanirahim
// Elhamdullillahirabbulalemin


import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { getPostDataInclude, PostsPage } from "@/lib/types";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const q = req.nextUrl.searchParams.get("q") || "";
    const cursor = req.nextUrl.searchParams.get("cursor") || undefined;

    const searchTerms = q.split(" "); // Convert search query to an array

    const pageSize = 10;

    const { user } = await validateRequest();

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const posts = await prisma.mmavahi.findMany({
      where: {
        OR: [
          {
            content: {
              hasSome: searchTerms, // Use hasSome to match any of the search terms
            },
          },
          {
            user: {
              displayName: {
                contains: q, // Use contains for partial match
                mode: "insensitive", // Case insensitive search
              },
            },
          },
          {
            user: {
              username: {
                contains: q, // Use contains for partial match
                mode: "insensitive", // Case insensitive search
              },
            },
          },
        ],
      },
      include: getPostDataInclude(user.id),
      orderBy: { createdAt: "desc" },
      take: pageSize + 1,
      cursor: cursor ? { id: cursor } : undefined,
    });

    const nextCursor = posts.length > pageSize ? posts[pageSize].id : null;

    const data: PostsPage = {
      posts: posts.slice(0, pageSize),
      nextCursor,
    };

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}