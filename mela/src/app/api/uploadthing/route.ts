// Bismillahirahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
//Suphanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah



import { createRouteHandler } from "uploadthing/next";
import { fileRouter } from "./core";

export const { GET, POST } = createRouteHandler({ router: fileRouter });
