import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addProductToCart } from '~/store/modules/cart/actions';

import * as S from './styles';

export default function ProductList() {
  const products = useSelector(state => state.productsList.products);

  const dispatch = useDispatch();

  function handleAddToCart(product) {
    dispatch(addProductToCart(product));
  }

  return (
    <S.Container>
      <h1>Lista de produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button type="button" onClick={() => handleAddToCart(product)}>
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
