// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/mcomponents/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "../hooks/useCart";

export default function Page() {
  const { items, addToCart } = useCart();
  const [activeTab, setActiveTab] = useState("yeni");

  const products = {
    yeni: [
      {
        id: 1,
        name: "Yeni Ürün 1",
        price: 79.99,
        image: "https://via.placeholder.com/300x300?text=New+Product+1",
        description: "En yeni ürünler",
      },
      {
        id: 2,
        name: "Yeni Ürün 2",
        price: 89.99,
        image: "https://via.placeholder.com/300x300?text=New+Product+2",
        description: "En yeni ürünler",
      },
      {
        id: 3,
        name: "Yeni Ürün 3",
        price: 99.99,
        image: "https://via.placeholder.com/300x300?text=New+Product+3",
        description: "En yeni ürünler",
      },
      {
        id: 4,
        name: "Yeni Ürün 4",
        price: 109.99,
        image: "https://via.placeholder.com/300x300?text=New+Product+4",
        description: "En yeni ürünler",
      },
    ],
    populer: [
      {
        id: 5,
        name: "Popüler Ürün 1",
        price: 129.99,
        image: "https://via.placeholder.com/300x300?text=Popular+Product+1",
        description: "En popüler ürünler",
      },
      {
        id: 6,
        name: "Popüler Ürün 2",
        price: 139.99,
        image: "https://via.placeholder.com/300x300?text=Popular+Product+2",
        description: "En popüler ürünler",
      },
      {
        id: 7,
        name: "Popüler Ürün 3",
        price: 149.99,
        image: "https://via.placeholder.com/300x300?text=Popular+Product+3",
        description: "En popüler ürünler",
      },
      {
        id: 8,
        name: "Popüler Ürün 4",
        price: 159.99,
        image: "https://via.placeholder.com/300x300?text=Popular+Product+4",
        description: "En popüler ürünler",
      },
    ],
    indirim: [
      {
        id: 9,
        name: "İndirimli Ürün 1",
        price: 49.99,
        originalPrice: 99.99,
        image: "https://via.placeholder.com/300x300?text=Discount+Product+1",
        description: "50% indirim",
      },
      {
        id: 10,
        name: "İndirimli Ürün 2",
        price: 59.99,
        originalPrice: 119.99,
        image: "https://via.placeholder.com/300x300?text=Discount+Product+2",
        description: "50% indirim",
      },
      {
        id: 11,
        name: "İndirimli Ürün 3",
        price: 69.99,
        originalPrice: 139.99,
        image: "https://via.placeholder.com/300x300?text=Discount+Product+3",
        description: "50% indirim",
      },
      {
        id: 12,
        name: "İndirimli Ürün 4",
        price: 79.99,
        originalPrice: 159.99,
        image: "https://via.placeholder.com/300x300?text=Discount+Product+4",
        description: "50% indirim",
      },
    ],
  };

  const currentProducts = products[activeTab as keyof typeof products];

  return (
    <main className="flex-grow container mx-auto py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Özel Teklif</h1>
        <p className="text-gray-600">
          Sepetinizde {items.length} ürün var
        </p>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="yeni">Yeni Ürünler</TabsTrigger>
          <TabsTrigger value="populer">Popüler</TabsTrigger>
          <TabsTrigger value="indirim">İndirimli</TabsTrigger>
        </TabsList>

        <TabsContent value="yeni" className="w-full">
          <ProductGrid products={products.yeni} addToCart={addToCart} />
        </TabsContent>

        <TabsContent value="populer" className="w-full">
          <ProductGrid products={products.populer} addToCart={addToCart} />
        </TabsContent>

        <TabsContent value="indirim" className="w-full">
          <ProductGrid products={products.indirim} addToCart={addToCart} />
        </TabsContent>
      </Tabs>
    </main>
  );
}

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
  addToCart: (item: any) => void;
}

function ProductGrid({ products, addToCart }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
        >
          <div className="relative h-48 w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
            {product.originalPrice && (
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                -50%
              </div>
            )}
          </div>
          <div className="p-4">
            <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-3">{product.description}</p>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xl font-bold text-green-600">
                  {product.price} TL
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {product.originalPrice} TL
                  </span>
                )}
              </div>
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
}