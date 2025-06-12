import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-black'>
      <div className='flex flex-col justify-center items-center py-6'>
        <div className='text-gray-300 text-sm'>
          <p>{t('footer.copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};
