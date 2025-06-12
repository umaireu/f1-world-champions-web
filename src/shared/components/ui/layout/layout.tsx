import { Outlet } from 'react-router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

export const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1 w-full'>
        <section className='container mx-auto px-4 py-8'>
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};
