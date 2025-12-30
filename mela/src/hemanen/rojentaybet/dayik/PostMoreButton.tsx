// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SuphanAllah, Elhamdulillah, Allahu Ekber


import { DayikData } from "@/pirtukxane/types";
import { MoreHorizontal, Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import DeletePostDialog from "./DeletePostDialog";

interface PostMoreButtonProps {
  post: DayikData;
  className?: string;
}

export default function PostMoreButton({
  post,
  className,
}: PostMoreButtonProps) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost" className={className}>
            <MoreHorizontal className="size-5 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setShowDeleteDialog(true)}>
            <span className="flex items-center gap-3 text-destructive">
              <Trash2 className="size-4" />
              Delete
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    
    </>
  );
}
