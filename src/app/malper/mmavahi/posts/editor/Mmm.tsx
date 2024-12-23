// Bismillahirrahmanirrahim



import React, { useState } from 'react';

import prisma from '@/lib/prisma';
import { FormItem } from '@/components/ui/form';
import { Label } from '@radix-ui/react-label';

const Mmm = () => {
  const [location, setLocation] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Selected location:', location);

    // Veritabanına kaydetme işlemi
    await prisma.location.create({
      data: {
        name: location,
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormItem>
          <Label>Konumu</Label>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="someOption">Şehir Merkezi</option>
            <option value="otherOption">Deniz Kenarı</option>
            <option value="anotherOption">Doğa İçinde</option>
          </select>
        </FormItem>

        <FormItem>
          <button type="submit">Gönder</button>
        </FormItem>
      </form>
    </div>
  );
};

export default Mmm;


