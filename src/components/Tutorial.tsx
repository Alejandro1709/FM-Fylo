import Image from 'next/image';

const Tutorial: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-8 md:mx-20 md:flex-row md:gap-20'>
      <Image src='/illustration-stay-productive.png' alt='cov' height={400} width={400} />
      <div className='flex max-w-sm flex-col items-center justify-center gap-6 md:max-w-md'>
        <h1 className='text-3xl font-medium'>Stay productive, wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage
          needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues for live collaboration. No email
          attachments required.
        </p>
        <button className='mr-auto border-b border-cyan-400 text-cyan-400 hover:border-white hover:text-white'>
          See how Fylo works
        </button>
      </div>
    </section>
  );
};

export default Tutorial;
