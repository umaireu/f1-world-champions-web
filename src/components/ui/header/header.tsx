import { Logo } from '../logo/logo';
export const Header = () => {
  return (
    <header
      className='bg-[url(@assets/bg-min.jpg)] bg-no-repeat bg-top  bg-[length:100%_250px]'
      role='banner'>
      <nav className='flex items-center py-2 px-4' aria-label='Main navigation'>
        <Logo />
      </nav>
    </header>
  );
};
