import { Logo } from '../logo/logo';

export const Header = () => {
  return (
    <header className='bg-[url("/public/bg-min.jpg")] bg-no-repeat bg-top  bg-[length:100%_250px]'>
      <div className='flex items-center py-2 px-4'>
        <Logo />
      </div>
    </header>
  );
};
