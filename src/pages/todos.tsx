import { Todos } from '@/modules/todos';
import type { NextPage } from 'next';

type Props = {};

const TodosPage: NextPage<Props> = () => {
  return (
    <>
      <Todos />
    </>
  );
};

export default TodosPage;
