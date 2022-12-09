import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const ProductsLayout = () => {
  const params = useParams();

  const renderBredCumbs = (
    <h2 className="text-white text-xl font-semibold">
      <Link className='underline' to="/products">Products</Link>
      {params.id ? ' / Product Details' : null}
    </h2>
  );

  return (
    <div>
      <div className="h-16 bg-yellow-500 flex items-center justify-center">
        {renderBredCumbs}
      </div>
      <Outlet />
    </div>
  );
}

export default ProductsLayout;
