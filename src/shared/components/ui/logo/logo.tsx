import { useTranslation } from 'react-i18next';

interface Props {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo = ({ width = 100, height = 100, className }: Props) => {
  const { t } = useTranslation();
  return (
    <img
      src={'/logo.png'}
      alt={t('a11y.logo')}
      width={width}
      height={height}
      className={className}
    />
  );
};
