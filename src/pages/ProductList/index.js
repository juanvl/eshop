import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styles';

export default function ProductList() {
  const products = useSelector(state => state.productsList.products);

  return (
    <S.Container>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
