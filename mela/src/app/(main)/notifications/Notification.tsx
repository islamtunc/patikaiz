//Bismillahirahmanirahim 
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim




import UserAvatar from "@/components/UserAvatar";
// Remove the unused import if Notification is not needed
import type { NotificationData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Heart, MessageCircle, User2 } from "lucide-react";
import Link from "next/link";

type NotificationProps = {
  notification: NotificationData;
};

export default function Notification({ notification }: NotificationProps) {
  const notificationTypeMap: Record<string, React.ReactNode> = {
    LIKE: <Heart className="h-5 w-5 text-red-500" />,
    COMMENT: <MessageCircle className="h-5 w-5 text-blue-500" />,
    FOLLOW: <User2 className="h-5 w-5 text-green-500" />,
  };

  const icon = notificationTypeMap[notification.type ?? ""] || <Heart />;

  return (
    <div className={cn("flex items-start gap-3 p-4")}>
      {icon}
      <div className="flex-1">
        <p className="text-sm font-medium">
          <Link href={`/user/${notification.issuer?.username}`}>
            {notification.issuer?.displayName ?? notification.issuer?.username}
          </Link>
        </p>
        {notification.post && (
          <Link href={`/post/${notification.post.id}`}>
            <p className="text-xs text-gray-600">{notification.post.content}</p>
          </Link>
        )}
        <p className="text-xs text-gray-500">
          {new Date(notification.createdAt ?? "").toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
