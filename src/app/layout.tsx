import Navigation from '@/components/Navigation';
import './globals.css';

export const metadata = {
  title: 'Flyo',
  description:
    'Flyo is a music streaming platform that lets you listen to millions of songs from around the world, or upload your own.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-col'>
        <Navigation />
        <main className='flex flex-col'>{children}</main>
      </body>
    </html>
  );
}
