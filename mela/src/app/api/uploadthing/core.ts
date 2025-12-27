// Bismillahirahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin
// Elhamdulillahirrabbulalemin
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin
// Xeyni Allah tu Xweda tune
import { validateRequest } from "@/auth";
import prisma from "@/pirtukxane/prisma";
import { createUploadthing, FileRouter } from "uploadthing/next";
import { UploadThingError, UTApi } from "uploadthing/server";

const f = createUploadthing();

export const fileRouter = {
  avatar: f({
    image: { maxFileSize: "512KB" },
  })
    .middleware(async ({ req }) => {
      // pass the incoming request to your auth helper so it can read cookies/headers
      const { user } = await validateRequest();

      if (!user) throw new UploadThingError("Unauthorized");

      return { user };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const oldAvatarUrl = metadata.user.avatarUrl;
      if (oldAvatarUrl) {
        const key = oldAvatarUrl.split(`/a/${process.env.UPLOADTHING_APP_ID}/`)[1];
        if (key) await new UTApi().deleteFiles(key);
      }

      const newAvatarUrl = file.url.replace("/f/", `/a/${process.env.UPLOADTHING_APP_ID}/`);

      await prisma.user.update({
        where: { id: metadata.user.id },
        data: { avatarUrl: newAvatarUrl },
      });

      return { avatarUrl: newAvatarUrl };
    }),
  attachment: f({
    image: { maxFileSize: "4MB", maxFileCount: 5 },
    video: { maxFileSize: "64MB", maxFileCount: 5 },
  })
    .middleware(async ({ req }) => {
      const { user } = await validateRequest();
      if (!user) throw new UploadThingError("Unauthorized");
      return { user };
    })
    .onUploadComplete(async ({ file, metadata }) => {
      const media = await prisma.media.create({
        data: {
          url: file.url.replace("/f/", `/a/${process.env.UPLOADTHING_APP_ID}/`),
          type: file.type.startsWith("image") ? "IMAGE" : "VIDEO",
          // optional: link to user if needed
          ...(metadata?.user ? { userId: metadata.user.id } : {}),
        },
      });

      return { mediaId: media.id };
    }),
} satisfies FileRouter;

export type AppFileRouter = typeof fileRouter;
