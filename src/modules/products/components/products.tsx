import { useProductsApi } from '@/services/products/axios/products-api';
import { ChangeEvent, useState } from 'react';

import dynamic from 'next/dynamic';

const Product = dynamic(() => import('./product'));
const ProductsFilter = dynamic(() => import('./products-filter'));

const Products = () => {
  const [sortState, setSortState] = useState('');
  const [limitFilter, setLimitFilter] = useState('');

  const { useProducts } = useProductsApi();

  const filterState = sortState ? sortState : limitFilter;

  const { data: products, isLoading } = useProducts(filterState);

  const handleSortFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setLimitFilter('');
    setSortState(`?sort=${e.target.value}`);
  };

  const handleLimitFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortState('');
    setLimitFilter(`?limit=${e.target.value}`);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="m-auto w-[90%] lg:w-[85%]">
      <ProductsFilter
        sortState={sortState}
        limitFilter={limitFilter}
        handleSortFilter={handleSortFilter}
        handleLimitFilter={handleLimitFilter}
      />
      {products ? <p className="">{products.length} Products Found</p> : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 m-auto h-full w-ful py-5">
        {products?.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
