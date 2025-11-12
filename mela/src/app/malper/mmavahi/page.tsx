// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah

"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "../hooks/useCart";

export default function Page() {
  const { items, addToCart } = useCart();
  const cartCount = items.length;

  const products = [
    {
      id: 1,
      name: "Ürün 1",
      price: 99.99,
      image: "https://via.placeholder.com/300x300?text=Product+1",
      description: "Kaliteli ürün açıklaması",
    },
    {
      id: 2,
      name: "Ürün 2",
      price: 149.99,
      image: "https://via.placeholder.com/300x300?text=Product+2",
      description: "Kaliteli ürün açıklaması",
    },
    {
      id: 3,
      name: "Ürün 3",
      price: 199.99,
      image: "https://via.placeholder.com/300x300?text=Product+3",
      description: "Kaliteli ürün açıklaması",
    },
    {
      id: 4,
      name: "Ürün 4",
      price: 249.99,
      image: "https://via.placeholder.com/300x300?text=Product+4",
      description: "Kaliteli ürün açıklaması",
    },
  ];

  return (
    <main className="flex-grow container mx-auto py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">İlanlar</h1>
        <p className="text-gray-600">Sepetinizde {cartCount} ürün var</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="relative h-48 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-3">{product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold text-green-600">{product.price} TL</span>
              </div>
              <Button
                className="w-full"
                onClick={() =>
                  addToCart({
                    id: product.id.toString(),
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  })
                }
              >
                Sepete Ekle
              </Button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}