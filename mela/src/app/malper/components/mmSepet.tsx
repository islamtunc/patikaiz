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



import { useCart } from '../hooks/useCart';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Cart() {
  const { items, removeFromCart, updateQuantity } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Sepeta min</h2>
      {items.length === 0 ? (
        <p>Sepeta we vala ye</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 py-2">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.price} TL
                </p>
              </div>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                className="w-16 rounded-md border px-2 py-1"
              />
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeFromCart(item.id)}
              >
                Jê bibe
              </Button>
            </div>
          ))}
          <div className="mt-4 flex justify-between border-t pt-4">
            <span className="font-bold">Tevahî:</span>
            <span className="font-bold">{total} TL</span>
          </div>
          <Button className="mt-4 w-full">
            Temam bike
          </Button>
        </>
      )}
    </div>
  );
}