import Item from './Item';

const Showcase: React.FC = () => {
  return (
    <section className='grid grid-cols-1 place-content-center gap-20 bg-[#171F2B] md:mx-20 md:grid-cols-2'>
      <Item
        title='Access your files, anywhere'
        description='The ability to use a smartphone, tablet, or computer to access your account means your files follow you
            everywhere.'
        imagePath='/icon-access-anywhere.svg'
      />
      <Item
        title='Security you can trust'
        description='2-factor authentication and user-controlled encryption are just a couple of the security features we allow
            to help secure your files.'
        imagePath='/icon-security.svg'
      />
      <Item
        title='Real-time collaboration'
        description='Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
        imagePath='/icon-collaboration.svg'
      />
      <Item
        title='Store any type of file'
        description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        imagePath='/icon-any-file.svg'
      />
    </section>
  );
};

export default Showcase;
