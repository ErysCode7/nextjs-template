import { ROUTES } from '@/utils/constants';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  const date = new Date().getFullYear();

  return (
    <footer
      className={`w-full h-20 shadow-sm bg-white ${
        router.pathname !== ROUTES.PRODUCTS ? 'md:absolute bottom-0' : 'static'
      } `}
    >
      <div className="flex items-center m-auto h-full w-[90%] lg:w-[85%]">
        <h2 className="text-gray-500 text-xs sm:text-sm">
          Nextjs Template <span className="text-blue-500">©{date}.</span> All rights reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
