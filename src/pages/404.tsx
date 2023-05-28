import { NotFound } from '@/modules/404';
import type { NextPage } from 'next';

type Props = {};

const NotFoundPage: NextPage<Props> = () => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default NotFoundPage;
