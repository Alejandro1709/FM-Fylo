import Image from 'next/image';

type ItemProps = {
  title: string;
  description: string;
  imagePath: string;
};

const Item: React.FC<ItemProps> = ({ title, description, imagePath }) => {
  return (
    <article className='flex flex-col items-center justify-center gap-8'>
      <Image src={imagePath} alt='icon' width={80} height={80} draggable={false} />
      <div className='flex flex-col gap-2 text-center'>
        <h1 className='text-2xl font-semibold'>{title}</h1>
        <p className='max-w-sm'>{description}</p>
      </div>
    </article>
  );
};

export default Item;
