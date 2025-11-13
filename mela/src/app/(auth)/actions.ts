// Bismillahirahmanirahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah, Muhammedur Resulullah
// La havle vela kuvvete illa billah
// Astagfirullah al azim
// La ilahe illallah, wahdahu la sharika lahu, lahul mulku wa lahul hamdu yuhyi wa yumit wa huwa ala kulli shay'in qadir
// Seyyidena ve nebiyyena Muhammedun abduhu ve rasuluhu
// Subhanallahi wa bihamdihi, subhanallahil azim
// ELHAMDULILLAHI RABBIL 'ALAMIN
// Allah U Ekber ve lillahi'l-hamd

"use server";

import { lucia, validateRequest } from "@/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

  return redirect("/malper");
}
