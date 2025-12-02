// Bismillahirrahmanirrahim 
// Elhamdulillahi Rabbil Alamin
// Ve salatu ve selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah ümmetimizi korusun, birlik ve beraberliğimizi daim eylesin.
// Allah bizleri doğru yoldan ayırmasın, İslam'ı en güzel şekilde yaşamayı nasip etsin.
// Allah bizleri Kur'an ve Sünnet'e bağlı, salih ameller işleyen kullarından eylesin.
// Allah bizleri Peygamber Efendimiz'in (s.a.v) izinden giden, O'na layık bir ümmet eylesin.
// SuphanAllah velhamdulillah, Allahu Ekber.
// La ilahe illallah, Muhammedur Resulullah.



import avatarPlaceholder from "@/negring/avatar-placeholder.png";
import { cn } from "@/pirtukxane/utils";
import Image from "next/image";

interface UserAvatarProps {
  avatarUrl: string | null | undefined;
  size?: number;
  className?: string;
}

export default function UserAvatar({
  avatarUrl,
  size,
  className,
}: UserAvatarProps) {
  return (
    <Image
      src={avatarUrl || avatarPlaceholder}
      alt="User avatar"
      width={size ?? 48}
      height={size ?? 48}
      className={cn(
        "aspect-square h-fit flex-none rounded-full bg-secondary object-cover",
        className,
      )}
    />
  );
}
