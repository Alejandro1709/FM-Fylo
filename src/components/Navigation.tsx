import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  return (
    <header className='m-[24px] flex flex-row items-center justify-between md:m-[45px]'>
      <Link href='/'>
        <Image src='/logo.svg' alt='logo' width={100} height={100} draggable={false} />
      </Link>
      <ul className='flex flex-row items-center gap-6'>
        <li className='cursor-pointer hover:underline'>Features</li>
        <li className='cursor-pointer hover:underline'>Team</li>
        <li className='cursor-pointer hover:underline'>Sign In</li>
      </ul>
    </header>
  );
};

export default Navigation;
