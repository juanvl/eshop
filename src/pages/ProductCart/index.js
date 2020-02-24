import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styles';

export default function ProductCart() {
  const products = useSelector(state => state.cart.products);

  return (
    <S.Container>
      <h1>Carrinho</h1>
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
