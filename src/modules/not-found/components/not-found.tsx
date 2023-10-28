import { ROUTES } from '@/utils/constant';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 md:gap-3 lg:gap-5 items-center justify-center h-[calc(100vh_-_80px)]">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">404 page not found!</h1>
      <p className="text-base lg:text-lg text-gray-500">
        Click{' '}
        <span onClick={() => router.push(ROUTES.HOME)} className="text-blue-500 cursor-pointer">
          here
        </span>{' '}
        to go back to home
      </p>
    </div>
  );
};

export default NotFound;
