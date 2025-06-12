export const Initials = ({ name }: { name: string }) => {
  if (!name) return null;
  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  return (
    <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs border-2 border-red-600 flex-shrink-0'>
      {getInitials(name)}
    </div>
  );
};
