// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbul Alemin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Allah u Ekber, Allah u Ekber, ve lillahi'l-hamd
// Bismillahirrahmanirrahim
// Bu dosya, ky kütüphanesini kullanarak API isteklerini yapmak için bir instance oluşturur.

import ky from 'ky';

// kyInstance, tüm projede kullanılacak API istemcisidir.
// prefixUrl: Tüm isteklerin temel URL'si (çevresel değişken veya localhost).
// timeout: Maksimum bekleme süresi (ms cinsinden).
const kyInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  timeout: 10000, // 10 saniye
});

export default kyInstance;

