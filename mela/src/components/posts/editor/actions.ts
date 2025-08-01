// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbul Alemin 
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illAllah
// SuphAnAllah, SubhanAllah, SubhanAllah, ve'l-hamdulillah
// HasbunAllahu ve ni'mel vekil

// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Suphan Allah, SubhanAllah, SubhanAllah, ve'l-hamdulillah
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illAllah
// HasbunAllahu ve ni'mel vekil

"use server";

import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { getPostDataInclude } from "@/lib/types";
import { z } from "zod";

export const createPostSchema = z.object({
  content: z.array(z.string()),
  mediaIds: z.array(z.string()),
});

export async function submitPost(input: {
  content: string[];
  mediaIds: string[];
}) {
  const { user } = await validateRequest();
  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  // content dizisini alanlara ayır
  const [
    category = "",
    title = "",
    city = "",
    address = "",
    price = "",
    description = "",
  ] = content;

  // lat/lng gibi alanlar için sabit değer veya content dizisine ekle
  const lat = 0;
  const lng = 0;

  const newPost = await prisma.post.create({
    data: {
      content: JSON.stringify(content), // Dizi olarak string olarak kaydediliyor
      userId: user.id,
      ...(mediaIds.length > 0 && {
        attachments: { connect: mediaIds.map((id) => ({ id })) },
      }),
      // title, price, category, address, city, lat, lng, description alanlarını kaldır!
    },
    include: getPostDataInclude(user.id),
  });

  return newPost;
}