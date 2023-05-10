import Image from 'next/image';

const Header = () => {
  return (
    <header className='flex flex-col items-center gap-8'>
      <Image src='/illustration-intro.png' alt='illustration' width={340} height={340} draggable={false} />
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='max-w-sm text-center text-3xl font-medium leading-snug md:max-w-lg'>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className='max-w-xs text-center md:max-w-lg'>
          Fylo stores all your most important files in one secure location. Access them wherever you need, share and
          collaborate with friends family, and co-workers.
        </p>
        <button className='mt-4 w-full rounded-full bg-cyan-400 p-4 font-bold md:w-2/4'>Get Started</button>
      </div>
    </header>
  );
};

export default Header;
