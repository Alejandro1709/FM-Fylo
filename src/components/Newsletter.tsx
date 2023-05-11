const Newsletter: React.FC = () => {
  return (
    <section className='mx-10 flex -translate-y-10 flex-col gap-6 rounded-md bg-[#1B2330] p-8 text-center md:mx-auto md:w-2/4'>
      <h1 className='text-3xl font-medium'>Get early access today</h1>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
        our support team would be happy to help you.
      </p>
      <form className='flex flex-col gap-2'>
        <div className='flex flex-col gap-6 md:flex-row'>
          <input
            className='flex-1 rounded-full border-none p-2.5 text-black'
            type='text'
            placeholder='email@example.com'
            required
          />
          <button className='rounded-full border-none bg-cyan-400 p-2.5'>Get Started For Free</button>
        </div>
        <p className='mr-auto text-red-500'>Error, please check your email</p>
      </form>
    </section>
  );
};

export default Newsletter;
