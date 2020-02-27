import React from 'react';
import { MdAddShoppingCart, MdAdd, MdShoppingCart } from 'react-icons/md';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Button from '~/components/Button';
import { addProduct } from '~/store/modules/cart/actions';
import { EmptyContainer } from '~/styles/common';
import { formatPrice } from '~/util/format';

import * as S from './styles';

export default function ProductList({ history }) {
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
    dispatch(addProduct(product));
  }

  function goToAddPage() {
    history.push('/add');
  }

  return (
    <S.Container>
      <h1>Bem-vindo(a) ao eShop!</h1>

      {products.length ? (
        <>
          <span>
            <Link to="/cart">
              <MdShoppingCart size={16} /> Ver meu carrinho ({totalAmount})
            </Link>
          </span>
          <PerfectScrollbar className="scrolldiv">
            <ul>
              {products.map(product => (
                <li key={product.id}>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.priceFormatted}</span>
                  </div>
                  <Button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                  >
                    <MdAddShoppingCart size={20} />
                    {amounts[product.id] || 0}
                  </Button>
                </li>
              ))}
            </ul>
          </PerfectScrollbar>
        </>
      ) : (
        <EmptyContainer>
          <span>:(</span>
          <span>Não há produtos na sua lista</span>
        </EmptyContainer>
      )}

      <div>
        <Button red type="button" onClick={goToAddPage}>
          <MdAdd size={20} /> Adicionar novo produto
        </Button>
      </div>
    </S.Container>
  );
}

ProductList.propTypes = {
  history: PropTypes.object.isRequired,
};
