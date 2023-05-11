import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Reviews from '@/components/Reviews';
import Showcase from '@/components/Showcase';
import Tutorial from '@/components/Tutorial';
import { type NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <section className='flex flex-1 flex-col gap-40'>
      <Header />
      <Showcase />
      <Tutorial />
      <Reviews />
      <Footer />
    </section>
  );
};

export default Home;
