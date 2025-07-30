// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbul Alemin 
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illAllah
// SuphAnAllah, SubhanAllah, SubhanAllah, ve'l-hamdulillah
// HasbunAllahu ve ni'mel vekil
"use server";

import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { getPostDataInclude } from "@/lib/types";
import { createPostSchema } from "@/lib/validation";

export async function submitPost(input: {
  content: string;
  mediaIds: string[];
  title: string;
  price: string;
  category: string;
  address: string;
  whatsapp: string;
  contact: string;
  city: string;
  lat: number;
  lng: number;
  description: string;
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const {
    content,
    mediaIds,
    title,
    price,
    category,
    address,
    whatsapp,
    contact,
    city,
    lat,
    lng,
    description
  } = createPostSchema.parse(input);

  const newPost = await prisma.post.create({
    data: {
      content,
      userId: user.id,
      attachments: {
        connect: mediaIds.map((id) => ({ id })),
      },
      title,
      price,
      category,
      address,
      whatsapp,
      contact,
      city,
      lat,
      lng,
    },
    include: getPostDataInclude(user.id),
  });

  return newPost;
}
