// Bismillahirrahmanirahim
// Elhamdulillahirabbilalemin
// Es-selatu ve Es-selamu ala Resulina Muhammedin
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Süphanallah, Elhamdulillah, Allahu Ekber

import { Prisma } from "@prisma/client";

/**
 * Kullanıcı bilgilerini seçmek için
 */
export function getUserDataSelect(loggedInUserId: string) {
  return {
    id: true,
    username: true,
    displayName: true,
    avatarUrl: true,
    bio: true,
    createdAt: true,
  } satisfies Prisma.UserSelect;
}

export type UserData = Prisma.UserGetPayload<{
  select: ReturnType<typeof getUserDataSelect>;
}>;

/**
 * Mmavahi için include ayarları
 */
export function getDiwarDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
    bookmarks: true,
  } satisfies Prisma.DiwarInclude;
}

export type DiwarData = Prisma.DiwarGetPayload<{
  include: ReturnType<typeof getDiwarDataInclude>;
}>;

export interface DiwarPage {
  posts: DiwarData[];
  nextCursor: string | null;
}

/**
 * Mmselik için include ayarları
 */
export function getBavDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
    bookmarks: true,
  } satisfies Prisma.BavInclude;
}

export type BavData = Prisma.BavGetPayload<{
  include: ReturnType<typeof getBavDataInclude>;
}>;

export interface BavPage {
  posts: BavData[];
  nextCursor: string | null;
}


export function getDayikDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
    bookmarks: true,
  } satisfies Prisma.DayikInclude;
}

export type DayikData = Prisma.DayikGetPayload<{
  include: ReturnType<typeof getDayikDataInclude>;
}>;

export interface DayikPage {
  posts: DayikData[];
  nextCursor: string | null;
}

export interface BookmarkInfo {
  isBookmarkedByUser: boolean;
}
