import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Button } from '../button/button';

interface BackButtonProps {
  /** Specific route to navigate to. If not provided, uses browser's back history */
  to?: string;
  /** Custom label for the button */
  label?: string;
  /** Additional CSS classes */
  className?: string;
}

export const BackButton = ({
  to,
  label,
  className = 'bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-md transition-colors duration-200 flex items-center gap-2',
}: BackButtonProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBack = () => {
    if (to) {
      void navigate(to);
    } else {
      window.history.back();
    }
  };

  const buttonLabel = label || t('navigation.back', 'Back');

  return (
    <Button
      onClick={handleBack}
      className={className}
      aria-label={t('navigation.back.aria', 'Go back to previous page')}>
      <svg
        className='w-4 h-4'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        aria-hidden='true'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M15 19l-7-7 7-7'
        />
      </svg>
      {buttonLabel}
    </Button>
  );
};
