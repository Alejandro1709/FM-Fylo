import Image from 'next/image';
import Review from './Review';

const Reviews: React.FC = () => {
  return (
    <section className='relative mx-10 grid grid-cols-1 gap-10 md:mx-20 md:grid-cols-3 md:gap-20'>
      <Image className='-z-1 absolute -left-2 -top-6' src='/bg-quotes.png' alt='quotes' height={40} width={40} />
      <Review
        text='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become
          a well-oiled collaboration machine.'
        name='Satish Patel'
        tag='Founder & CEO, Huddle'
        avatar='/profile-1.jpg'
      />
      <Review
        text='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become
          a well-oiled collaboration machine.'
        name='Bruce McKenzie'
        tag='Founder & CEO, Huddle'
        avatar='/profile-2.jpg'
      />
      <Review
        text='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become
          a well-oiled collaboration machine.'
        name='Iva Boyd'
        tag='Founder & CEO, Huddle'
        avatar='/profile-3.jpg'
      />
    </section>
  );
};

export default Reviews;
