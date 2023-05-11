import Image from 'next/image';
import Link from 'next/link';
import Newsletter from './Newsletter';

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#0B1524]'>
      <Newsletter />
      <section className='mx-10 flex flex-col gap-10 md:mx-20'>
        <Link href='/'>
          <Image src='/logo.svg' alt='logo' width={100} height={100} draggable={false} />
        </Link>
        <div className='flex flex-col items-start gap-10 md:flex-row md:justify-between'>
          <ul className='flex flex-col gap-1 md:flex-row md:gap-20'>
            <li className='flex flex-row items-center gap-2'>
              <Image
                className='self-start'
                src='/icon-location.svg'
                alt='pin'
                width={14}
                height={14}
                draggable={false}
              />
              <p className='max-w-xl md:max-w-xs'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua
              </p>
            </li>
          </ul>
          <ul className='flex flex-col gap-2'>
            <li className='flex flex-row items-start gap-4'>
              <Image src='/icon-phone.svg' alt='phone' width={14} height={14} draggable={false} />
              <p className='max-w-xl md:max-w-xs'>+1-543-123-4567</p>
            </li>
            <li className='flex flex-row items-start gap-4'>
              <Image src='/icon-email.svg' alt='mail' width={14} height={14} draggable={false} />
              <p className='max-w-xl md:max-w-xs'>example@fylo.com</p>
            </li>
          </ul>
          <ul className='flex flex-col gap-2'>
            <li className='flex flex-row items-center gap-4'>About Us</li>
            <li className='flex flex-row items-center gap-4'>Jobs</li>
            <li className='flex flex-row items-center gap-4'>Press</li>
            <li className='flex flex-row items-center gap-4'>Blog</li>
          </ul>
          <ul className='flex flex-col gap-2 self-start'>
            <li className='flex flex-row items-center gap-4'>Contact Us</li>
            <li className='flex flex-row items-center gap-4'>Terms</li>
            <li className='flex flex-row items-center gap-4'>Privacy</li>
          </ul>
          <ul className='flex flex-row gap-2 self-center md:self-start'>
            <li className='flex flex-row items-center gap-4'>FB</li>
            <li className='flex flex-row items-center gap-4'>TW</li>
            <li className='flex flex-row items-center gap-4'>YT</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
