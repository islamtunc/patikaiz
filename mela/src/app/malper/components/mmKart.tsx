// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah
"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">
            {price} TL
          </span>
          <Button 
            onClick={() => addToCart({ id, name, price, image, quantity: 1 })}
          >
            Têxe Sepetê
          </Button>
        </div>
      </div>
    </div>
  );
}