import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatPrice } from '~/util/format';

import * as S from './styles';

export default function ProductCart() {
  const products = useSelector(state =>
    state.cart.products.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );

  const totalPrice = useCallback(
    formatPrice(
      products.reduce(
        (accumulator, item) => accumulator + item.price * item.amount,
        0
      )
    ),
    []
  );

  return (
    <S.Container>
      <h1>Meu carrinho</h1>

      <span>
        <Link to="/">Voltar</Link>
      </span>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.subTotal} (x{product.amount})
          </li>
        ))}
      </ul>
      <strong>Preço Total: {totalPrice}</strong>
    </S.Container>
  );
}
