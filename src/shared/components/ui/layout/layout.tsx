import { Outlet } from 'react-router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

export const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1 w-full'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
