import React from 'react';
import { MdAddShoppingCart, MdAdd } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import { addProductToCart } from '~/store/modules/cart/actions';
import { formatPrice } from '~/util/format';

import * as S from './styles';

export default function ProductList() {
  const products = useSelector(state =>
    state.productsList.products.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }))
  );

  const amounts = useSelector(state =>
    state.cart.products.reduce((accumulator, product) => {
      accumulator[product.id] = product.amount;
      return accumulator;
    }, {})
  );

  const totalAmount = useSelector(state =>
    state.cart.products.reduce(
      (accumulator, product) => accumulator + product.amount,
      0
    )
  );

  const dispatch = useDispatch();

  function handleAddToCart(product) {
    dispatch(addProductToCart(product));
  }

  function goToAddPage() {}

  return (
    <S.Container>
      <h1>Bem-vindo(a) ao eShop!</h1>

      <span>
        <Link to="/cart">
          <MdAddShoppingCart size={16} color="#fff" /> Ver meu carrinho (
          {totalAmount})
        </Link>
      </span>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>
              <strong>{product.name}</strong>
              <span>{product.priceFormatted}</span>
            </div>
            <Button type="button" onClick={() => handleAddToCart(product)}>
              <MdAddShoppingCart size={25} color="#fff" />
              {amounts[product.id] || 0}
            </Button>
          </li>
        ))}
      </ul>

      <div>
        <Button red type="button" onClick={goToAddPage}>
          <MdAdd size={25} color="#fff" /> Adicionar novo produto
        </Button>
      </div>
    </S.Container>
  );
}
