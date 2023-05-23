import type { NextPage } from 'next';
import { ChangeEvent } from 'react';

type Props = {
  sortState: string;
  limitFilter: string;
  handleSortFilter: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleLimitFilter: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const ProductsFilter: NextPage<Props> = ({
  sortState,
  limitFilter,
  handleSortFilter,
  handleLimitFilter,
}) => {
  return (
    <div className="my-5 flex items-center gap-5">
      <select
        value={sortState}
        onChange={handleSortFilter}
        className="border-none outline-none rounded h-10 w-48"
      >
        <option value="">Filter products</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <select
        value={limitFilter}
        onChange={handleLimitFilter}
        className="border-none outline-none rounded h-10 w-48"
      >
        <option value="">Limit by</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
    </div>
  );
};

export default ProductsFilter;
