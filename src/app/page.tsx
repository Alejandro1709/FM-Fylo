import Header from '@/components/Header';
import Showcase from '@/components/Showcase';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <section className='flex flex-1 flex-col gap-20'>
      <Header />
      <Showcase />
    </section>
  );
};

export default Home;
