import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  className = '',
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) => {
  const baseClasses =
    'cursor-pointer font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none';

  const variantClasses = {
    primary: 'bg-black  text-white focus:ring-white focus-visible:ring-white',
    secondary:
      'bg-gray-600  text-white focus:ring-gray-500 focus-visible:ring-gray-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

Button.displayName = 'Button';
