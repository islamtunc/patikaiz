// Bismillahirahmanirahim
// Elhamdulillahirabbilalemin
// Esselatu  vesselamu ala seyyidina Muhammedin 
// La ilahe illallah, Muhammedur Resulullah
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

import prisma from "@/pirtukxane/prisma";
export async function GET() {
  const data = await prisma.mmselik.findMany({
    include: {
      products: true,
    },
  });

  return Response.json(data);
}
// Allahu Ekber ve lillahi'l-hamd