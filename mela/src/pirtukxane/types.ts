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
 */export function getRengDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
    bookmarks: true,
  } as Prisma.RengInclude;
}

export type RengData = Prisma.RengGetPayload<{
  include: ReturnType<typeof getRengDataInclude>;
}>;

export interface RengPage {
  posts: RengData[];
  nextCursor: string | null;
}
export function getStenbolDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
    bookmarks: true,
  } as Prisma.StenbolInclude;
}

export type StenbolData = Prisma.StenbolGetPayload<{
  include: ReturnType<typeof getStenbolDataInclude>;
}>;

export interface StenbolPage {
  posts: StenbolData[];
  nextCursor: string | null;
}


export function getHezkirinDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
    bookmarks: true,
  } as Prisma.HezkirinInclude;
}

export type HezkirinData = Prisma.HezkirinGetPayload<{
  include: ReturnType<typeof getHezkirinDataInclude>;
}>;

export interface HezkirinPage {
  posts: HezkirinData[];
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
  } as Prisma.BavInclude;
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
  } as Prisma.DayikInclude;
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

export function getDiwarDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
    bookmarks: true,
  } as Prisma.DiwarInclude;
}

export type DiwarData = Prisma.DiwarGetPayload<{
  include: ReturnType<typeof getDayikDataInclude>;
}>;

export interface DiwarPage {
  posts: DiwarData[];
  nextCursor: string | null;
}








export function getTnDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
    bookmarks: true,
  } as Prisma.TnInclude;
}

export type TnData = Prisma.TnGetPayload<{
  include: ReturnType<typeof getDayikDataInclude>;
}>;

export interface TnPage {
  posts: TnData[];
  nextCursor: string | null;
}
export function getDiyariDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
    bookmarks: true,
  } as Prisma.DiyariInclude;
}

export type DiyariData = Prisma.DiyariGetPayload<{
  include: ReturnType<typeof getDayikDataInclude>;
}>;

export interface DiyariPage {
  posts: DiyariData[];
  nextCursor: string | null;
}

export interface BookmarkInfo {
  isBookmarkedByUser: boolean;
}
export interface TrackingEvent {
  status: string;
  location: string;
  timestamp: string;
}

export interface TrackingResponse {
  tracking_number: string;
  status: string;
  last_update: string;
  events: TrackingEvent[];
}
