import Header from '@/components/Header';
import Showcase from '@/components/Showcase';
import Tutorial from '@/components/Tutorial';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <section className='flex flex-1 flex-col gap-20'>
      <Header />
      <Showcase />
      <Tutorial />
    </section>
  );
};

export default Home;
