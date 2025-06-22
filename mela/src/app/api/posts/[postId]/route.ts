// Bismillahirrahmanirrahim
import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: { postId: string } }) {
  try {
    const { user } = await validateRequest();
    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }
    const post = await prisma.post.findUnique({ where: { id: params.postId } });
    if (!post || post.userId !== user.id) {
      return Response.json({ error: "Not found or forbidden" }, { status: 404 });
    }
    await prisma.post.delete({ where: { id: params.postId } });
    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
