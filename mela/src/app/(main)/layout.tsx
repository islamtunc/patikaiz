// Bismillahirahmanirahim 



import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";
import SessionProvider from "./SessionProvider";
import prisma from "@/lib/prisma"; // added

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session?.user) return redirect("/malper");

  // Prefer a flag on the session user if available, otherwise try prisma.admin safely.
  const isAdminFromSession = !!((session.user as any)?.isAdmin);
  let isAdmin = isAdminFromSession;

  try {
    // Cast to any so TypeScript won't fail if `admin` isn't in the generated client yet.
    const prismaAny = prisma as any;
    if (prismaAny?.admin && !isAdminFromSession) {
      const adminRecord = await prismaAny.admin.findUnique({
        where: { id: session.user.id },
        select: { id: true },
      });
      isAdmin = !!adminRecord;
    }
  } catch (err) {
    // keep isAdmin = isAdminFromSession on error
  }

  const providedSession = { ...session, isAdmin };

  return (
    <SessionProvider value={providedSession}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="mx-auto flex w-full max-w-7xl grow gap-5 p-5">
          <MenuBar className="sticky top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm sm:block lg:px-5 xl:w-80" />
          {children}
        </div>
        <MenuBar className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p-3 sm:hidden" />
      </div>
    </SessionProvider>
  );
}
