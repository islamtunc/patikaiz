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
export function getMmavahiDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
    bookmarks: true,
  } satisfies Prisma.MmavahiInclude;
}

export type MmavahiData = Prisma.MmavahiGetPayload<{
  include: ReturnType<typeof getMmavahiDataInclude>;
}>;

export interface MmavahiPage {
  posts: MmavahiData[];
  nextCursor: string | null;
}

/**
 * Mmselik için include ayarları
 */
export function getMmkedkarDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
    bookmarks: true,
  } satisfies Prisma.MmkedkarInclude;
}

export type MmkedkarData = Prisma.MmkedkarGetPayload<{
  include: ReturnType<typeof getMmkedkarDataInclude>;
}>;

export interface MmkedkarPage {
  posts: MmkedkarData[];
  nextCursor: string | null;
}


export function getMmhewcedariDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
    bookmarks: true,
  } satisfies Prisma.MmhewcedariInclude;
}

export type MmhewcedariData = Prisma.MmhewcedariGetPayload<{
  include: ReturnType<typeof getMmkedkarDataInclude>;
}>;

export interface MmhewcedariPage {
  posts: MmhewcedariData[];
  nextCursor: string | null;
}

export interface BookmarkInfo {
  isBookmarkedByUser: boolean;
}
