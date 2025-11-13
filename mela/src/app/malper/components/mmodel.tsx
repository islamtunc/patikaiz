// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import type { FC } from 'react'

export const Modal: FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2"
          title="Sepetim"
          aria-label="Sepetim"
        >
          <ShoppingCart className="h-5 w-5" />
          {/* ikon tenê di mobîlê de, nivîs di desktop/md+ de xuya dibe */}
          <span className="hidden md:inline">Sepetim</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sepeta min</DialogTitle>
          <DialogDescription>
            Sepeta we ya kirînê
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Sepet naveroka we li vir */}
        </div>
      </DialogContent>
    </Dialog>
  )
}
