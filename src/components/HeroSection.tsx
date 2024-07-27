// components/HeroSection.tsx
import Link from 'next/link';
import Image from 'next/image';
const HeroSection = () => (
  <section className="flex flex-col items-center justify-center min-h-screen px-1">
    <Image 
    src="/banner.webp"
    width={500}
    height={500}
    alt='FIpbet Slot Gacor'
    />
    <h1 className="text-3xl font-bold mb-2 text-center">FIPBET Slot Gacor No 1</h1>
    <div className="flex flex-col space-y-4 mb-1">
      <Link href="https://maudi.club/dong"className="bg-blue-500 text-white py-3 px-6 rounded-lg transform transition-transform duration-200 hover:scale-110 hover:bg-blue-600 text-center" target='_blank'>
      Daftar Slot Gacor
      </Link>
      <Link href="https://maudi.club/dong"className="bg-blue-500 text-white py-3 px-6 rounded-lg transform transition-transform duration-200 hover:scale-110 hover:bg-blue-600 text-center" target='_blank'>
      Pragmatic Bet 200
      </Link>
      <Link href="https://maudi.club/dong"className="bg-blue-500 text-white py-3 px-6 rounded-lg transform transition-transform duration-200 hover:scale-110 hover:bg-blue-600 text-center" target='_blank'>Promo Terbaru
      </Link>
    </div>
  </section>
);

export default HeroSection;
