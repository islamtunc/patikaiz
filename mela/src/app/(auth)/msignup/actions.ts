// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah Muhammedur Resulullah
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin 
// Xeyni Allah tu Xweda tune

"use server";

import { lucia } from "@/auth";
import prisma from "@/lib/prisma";
import { signUpSchema, SignUpValues } from "@/lib/validation";
import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { validateRequest } from "@/auth";

export async function signUp(
  credentials: SignUpValues,
): Promise<{ error: string }> {
  try {
    const { username, email, password } = signUpSchema.parse(credentials);

    const passwordHash = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    const userId = generateIdFromEntropySize(10);

    const existingUsername = await prisma.user.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (existingUsername) {
      return {
        error: "Username already taken",
      };
    }

    const existingEmail = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });

    if (existingEmail) {
      return {
        error: "Email already taken",
      };
    }

    await prisma.$transaction(async (tx: { user: { create: (arg0: { data: { id: string; username: string; displayName: string; email: string; passwordHash: string; }; }) => any; }; }) => {
      await tx.user.create({
        data: {
          id: userId,
          username,
          displayName: username,
          email,
          passwordHash,
        },
      });
     
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    return redirect("/");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}

/**
 * Verify current signed-in user as admin using a secret invite code.
 * - Requires the user to be authenticated (validateRequest).
 * - Requires ADMIN_INVITE_CODE env var to match the submitted invite.
 *
 * Form must include an "invite" field.
 */
export async function verifyAsAdmin(formData: FormData) {
  const invite = formData.get("invite");
  if (!invite || typeof invite !== "string") {
    throw new Error("Invite code is required");
  }

  const expected = process.env.ADMIN_INVITE_CODE;
  if (!expected) {
    throw new Error("Server not configured for admin invite (ADMIN_INVITE_CODE missing)");
  }

  if (invite !== expected) {
    throw new Error("Invalid invite code");
  }

  const { user } = await validateRequest();
  if (!user) {
    throw new Error("Not authenticated");
  }

  // use a safe any-cast while schema/client may be in flux
  const db: any = prisma;

  // mark user as admin and create admin record if missing
  await db.user.update({
    where: { id: user.id },
    data: {
      isAdmin: true,
      admin: {
        upsert: {
          create: {
            id: user.id,
            role: "ADMIN",
            permissions: ["manage_users", "moderate_posts"],
          },
          update: {
            role: "ADMIN",
          },
        },
      },
    },
  });

  return { ok: true };
}
