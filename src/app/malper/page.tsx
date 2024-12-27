// Bismillahirahmanirahim



import { Home, Car, Shirt, Building, Briefcase, Paintbrush } from 'lucide-react';

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <a href='/mmavahi' className="flex items-center">
        <Home className="inline-block mr-2" /> Emlak
      </a>

      <a href='/mmwesayit' className="flex items-center">
        <Car className="inline-block mr-2" /> Araç
      </a>

      <a href='/mmkinc' className="flex items-center">
        <Shirt className="inline-block mr-2" /> Giyim
      </a>

      <a href='/mmkedkar' className="flex items-center">
        <Building className="inline-block mr-2" /> İnşaat iş ilanları
      </a>

      <a href='/mmkargeh' className="flex items-center">
        <Briefcase className="inline-block mr-2" /> İş ilanları
      </a>

      <a href='/mmhuner' className="flex items-center">
        <Paintbrush className="inline-block mr-2" /> Sanat ve el sanatları
      </a>
    </div>
  );
}