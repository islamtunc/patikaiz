//Bismillahirrahmanirahim 
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim



export function getUserDataSelect(loggedInUserId: string) {
  return {
    id: true,
    username: true,
    displayName: true,
    avatarUrl: true,
    bio: true,
    createdAt: true,
    followers: {
      where: {
        followerId: loggedInUserId,
      },
      select: {
        followerId: true,
      },
    },
    _count: {
      select: {
        posts: true,
        followers: true,
      },
    },
  };
}

export type UserData = {
  id: string;
  username: string;
  displayName?: string | null;
  avatarUrl?: string | null;
  bio?: string | null;
  createdAt: string | Date;
  followers?: { followerId: string }[];
  _count?: {
    posts?: number;
    followers?: number;
  };
};

export type PostData = {
  id: string | number;
  content?: string | null;
  user?: Partial<UserData>;
  attachments?: any[];
  likes?: { userId: string }[];
  bookmarks?: { userId: string }[];
  _count?: {
    likes?: number;
    comments?: number;
  };
  [k: string]: any;
};

export type CommentData = {
  id: string | number;
  content?: string | null;
  user?: Partial<UserData>;
  createdAt?: string | Date;
  [k: string]: any;
};

export type NotificationData = {
  id: string | number;
  type?: string | null;
  issuer?: {
    username?: string | null;
    displayName?: string | null;
    avatarUrl?: string | null;
  } | null;
  post?: {
    id?: string | number;
    content?: string | null;
  } | null;
  isRead?: boolean;
  createdAt?: string | Date;
  [k: string]: any;
};

export interface PostsPage {
  posts: PostData[];
  nextCursor: string | null;
}

export interface CommentsPage {
  comments: CommentData[];
  previousCursor: string | null;
}

export interface NotificationsPage {
  notifications: NotificationData[];
  nextCursor: string | null;
}

export interface FollowerInfo {
  followers: number;
  isFollowedByUser: boolean;
}

export interface LikeInfo {
  likes: number;
  isLikedByUser: boolean;
}

export interface BookmarkInfo {
  isBookmarkedByUser: boolean;
}

export interface MessageCountInfo {
  unreadCount: number;
}

export interface NotificationCountInfo {
  unreadCount: number;
}
