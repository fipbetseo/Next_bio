import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
  <header className="bg-white dark:bg-gray-800 text-black dark:text-white p-2 shadow-md fixed w-full z-0">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/"className="flex items-center">
          <Image
            src="/fipbet.png"
            width={30}
            height={30}
            alt="Fipbet"
          />
          <span className="ml-2 text-lg font-bold text-black dark:text-white">
            FIPBET
          </span>
      </Link>
    </div>
  </header>
);

export default Header;
