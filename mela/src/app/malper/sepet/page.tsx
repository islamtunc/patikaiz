// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah

"use client"
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { useRouter } from 'next/navigation';
// Default export: CartPage component
// Usage: place this file in your Next.js project (e.g. /components/CartPage.jsx) and import into a page.

export default function CartPage() {
  // sample products; in real app, feed from API or product store
  const sample = [
    { id: 'p1', title: 'Kahve Makinesi', price: 129.99, image: '/images/coffee.jpg' },
    { id: 'p2', title: 'Bluetooth Kulaklık', price: 79.5, image: '/images/headphones.jpg' },
    { id: 'p3', title: 'Laptop Çantası', price: 49.0, image: '/images/bag.jpg' },
  ]

  const [cart, setCart] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [promo, setPromo] = useState('')
  const [discount, setDiscount] = useState(0)

  // Load cart from localStorage for persistence
  useEffect(() => {
    const raw = typeof window !== 'undefined' && localStorage.getItem('cart')
    if (raw) setCart(JSON.parse(raw))
  }, [])
  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // Helpers
  const addToCart = (product) => {
    setCart((c) => {
      const found = c.find((x) => x.id === product.id)
      if (found) return c.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x))
      return [...c, { ...product, qty: 1 }]
    })
  }

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeItem(id)
    setCart((c) => c.map((x) => (x.id === id ? { ...x, qty } : x)))
  }

  const removeItem = (id) => setCart((c) => c.filter((x) => x.id !== id))

  const clearCart = () => setCart([])

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 9.99
  const total = +(subtotal + shipping - discount).toFixed(2)

  const applyPromo = () => {
    // Example promo logic
    if (!promo) return
    if (promo.toLowerCase() === 'indirim10') {
      setDiscount(+(subtotal * 0.1).toFixed(2))
    } else if (promo.toLowerCase() === 'bedavashipping') {
      setDiscount(shipping)
    } else {
      setDiscount(0)
    }
  }

  // UI
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Sepetiniz</h1>
          <div className="space-x-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-slate-800 text-white rounded-lg shadow-sm hover:opacity-95"
            >
              Sepeti Önizle
            </button>
            <button
              onClick={() => clearCart()}
              className="px-3 py-2 border rounded-lg text-sm"
              aria-label="Tümünü temizle"
            >
              Temizle
            </button>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Products to add (demo) */}
          <section className="lg:col-span-2 space-y-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <h2 className="font-semibold mb-3">Mağaza (örnek)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sample.map((p) => (
                  <div key={p.id} className="flex items-center gap-4 p-3 border rounded-lg">
                    <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{p.title}</h3>
                        <div className="font-semibold">₺{p.price.toFixed(2)}</div>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => addToCart(p)}
                          className="px-3 py-1 rounded bg-blue-600 text-white text-sm"
                        >
                          Sepete Ekle
                        </button>
                        <button className="text-sm underline" onClick={() => alert('Ürün detayları...')}>
                          Detay
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart list (detailed) */}
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <h2 className="font-semibold mb-3">Sepet Detayları</h2>
              {cart.length === 0 ? (
                <p className="text-sm text-gray-500">Sepetiniz boş. Ürün ekleyin.</p>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 border p-3 rounded">
                      <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{item.title}</div>
                            <div className="text-sm text-gray-500">₺{item.price.toFixed(2)} adet başı</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold">₺{(item.price * item.qty).toFixed(2)}</div>
                            <button onClick={() => removeItem(item.id)} className="text-xs text-red-600">Kaldır</button>
                          </div>
                        </div>

                        <div className="mt-2 flex items-center gap-2">
                          <button
                            aria-label="Azalt"
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="px-2 py-1 border rounded"
                          >
                            -
                          </button>
                          <input
                            value={item.qty}
                            onChange={(e) => updateQty(item.id, parseInt(e.target.value || '0', 10))}
                            type="number"
                            min={1}
                            className="w-16 text-center border rounded px-2 py-1"
                          />
                          <button
                            aria-label="Arttır"
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="px-2 py-1 border rounded"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Right: Summary */}
          <aside className="bg-white p-4 rounded-2xl shadow-sm">
            <h2 className="font-semibold mb-3">Sipariş Özeti</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Ara Toplam</span>
                <span className="font-medium">₺{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Kargo</span>
                <span className="font-medium">{shipping === 0 ? 'Ücretsiz' : `₺${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">İndirim</span>
                <span className="font-medium text-green-600">-₺{discount.toFixed(2)}</span>
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold">Toplam</div>
                  <div className="text-xl font-extrabold">₺{total.toFixed(2)}</div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex gap-2">
                    <input
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      placeholder="Promosyon kodu"
                      className="flex-1 border rounded px-3 py-2"
                    />
                    <button onClick={applyPromo} className="px-4 py-2 rounded bg-emerald-600 text-white">Uygula</button>
                  </div>

                  <button
                    onClick={useRouter().push.bind(useRouter(), '/malper/payment')  }
                    disabled={cart.length === 0}
                    className="w-full px-4 py-2 rounded-lg shadow text-white bg-indigo-600 disabled:opacity-50"
                  >
                    Ödemeye Geç
                  </button>

                  <button onClick={() => setIsModalOpen(true)} className="w-full px-4 py-2 rounded-lg border">Sepeti Önizle (Modal)</button>
                </div>
              </div>
            </div>
          </aside>
        </main>

        {/* Footer quick area */}
        <div className="mt-8 text-sm text-gray-500">Not: Bu demo bileşen Tailwind ile hazırlandı. Kendi API'nize bağlayın ve stil/çeviri değişiklikleri yapın.</div>
      </div>

      {/* Modal preview */}
      <AnimatePresence>
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-3">Sepet Önizleme</h3>
              {cart.length === 0 ? (
                <p className="text-gray-500">Sepet boş</p>
              ) : (
                <div className="space-y-3">
                  {cart.map((it) => (
                    <div key={it.id} className="flex items-center justify-between p-2 border rounded">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 overflow-hidden rounded bg-gray-100">
                          <img src={it.image} alt={it.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="font-medium">{it.title}</div>
                          <div className="text-sm text-gray-500">{it.qty} adet</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">₺{(it.price * it.qty).toFixed(2)}</div>
                      </div>
                    </div>
                  ))}

                  <div className="pt-3 border-t flex justify-between items-center">
                    <div className="font-medium">Toplam</div>
                    <div className="font-bold">₺{total.toFixed(2)}</div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button onClick={() => { setIsModalOpen(false); alert('Ödeme akışı...') }} className="flex-1 py-2 rounded bg-indigo-600 text-white">Ödemeye Geç</button>
                    <button onClick={() => setIsModalOpen(false)} className="flex-1 py-2 rounded border">Kapat</button>
                  </div>
                </div>
              )}
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  )
}


// Reusable Modal component using framer-motion
function Modal({ children, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6"
      >
        {children}
      </motion.div>
    </div>
  )
}

// Subhanallah, Elhamdulillah, Allahu Ekber, 
// La ilahe illallah, Muhammeden Abduhu ve Resuluhu
// La havle vela kuvvete illa billahil aliyyil azim
// Estağfirulllah El-Azim
// Elhmadulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbulalemin