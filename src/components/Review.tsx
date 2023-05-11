import Image from 'next/image';

type ReviewProps = {
  text: string;
  name: string;
  tag: string;
  avatar: string;
};

const Review: React.FC<ReviewProps> = ({ text, name, tag, avatar }) => {
  return (
    <article className='z-20 flex flex-col gap-6 rounded-md bg-[#202A3D] p-6'>
      <p className='max-w-md leading-relaxed'>{text}</p>
      <div className='flex flex-row gap-2.5'>
        <div className='h-10 w-10 overflow-hidden rounded-full bg-green-400'>
          <Image src={avatar} alt='avatar' width={100} height={100} />
        </div>
        <div className='flex flex-col gap-1'>
          <h2 className='text-xl font-semibold'>{name}</h2>
          <p className='text-sm text-gray-300'>{tag}</p>
        </div>
      </div>
    </article>
  );
};

export default Review;
