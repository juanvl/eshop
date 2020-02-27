import React, { useCallback } from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdArrowBack,
} from 'react-icons/md';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateAmount } from '~/store/modules/cart/actions';
import { EmptyContainer } from '~/styles/common';
import { formatPrice } from '~/util/format';

import * as S from './styles';

export default function ProductCart() {
  const products = useSelector(state =>
    state.cart.products.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
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
    [products]
  );

  const dispatch = useDispatch();

  const incrementAmount = product => {
    dispatch(updateAmount(product.id, product.amount + 1));
  };

  const decrementAmount = product => {
    dispatch(updateAmount(product.id, product.amount - 1));
  };

  if (!products.length) {
    return (
      <S.Container>
        <div>
          <Link to="/">
            <MdArrowBack />
          </Link>
          <h1>Meu carrinho</h1>
          <span />
        </div>
        <S.CartContainer>
          <EmptyContainer className="emptyCart">
            <span>:(</span>
            <span>Seu carrinho está vazio</span>
          </EmptyContainer>
        </S.CartContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <div>
        <Link to="/">
          <MdArrowBack />
        </Link>
        <h1>Meu carrinho</h1>
        <span />
      </div>

      <S.CartContainer>
        <ul className="listTitles">
          <li>PRODUTO</li>
          <li>QTD</li>
          <li>SUBTOTAL</li>
        </ul>

        <ul className="listContent">
          <PerfectScrollbar className="cartScroll">
            {products.map(p => (
              <div key={p.id} className="listRow">
                <li>
                  <strong>{p.name}</strong>
                  <span>{p.priceFormatted}</span>
                </li>
                <li className="midli">
                  <div>
                    <button type="button" onClick={() => decrementAmount(p)}>
                      <MdRemoveCircleOutline size={20} />
                    </button>
                    <input type="number" readOnly value={p.amount} />
                    <button type="button" onClick={() => incrementAmount(p)}>
                      <MdAddCircleOutline size={20} />
                    </button>
                  </div>
                </li>
                <li>
                  <strong>{p.subTotal}</strong>
                </li>
              </div>
            ))}
          </PerfectScrollbar>
        </ul>

        <footer>
          <span>TOTAL</span>
          <strong>{totalPrice}</strong>
        </footer>
      </S.CartContainer>
    </S.Container>
  );
}
