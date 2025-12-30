// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin 
// Xeyni Allah tu Xweda tune
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const lucia = {
  async invalidateSession(id: string) {
    // noop stub for compile-time; replace with real implementation from your auth module
  },
  createBlankSessionCookie() {
    return {
      name: "session",
      value: "",
      attributes: {} as Record<string, unknown>,
    };
  },
};

async function validateRequest() {
  // minimal stub that returns no session; replace with real validation logic
  return { session: null as { id: string } | null };
}

export async function logout() {
  const { session } = await validateRequest();

  if (!session) {
    throw new Error("Unauthorized");
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  return redirect("/login");
}
