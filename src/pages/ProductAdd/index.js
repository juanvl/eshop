import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addProduct } from '~/store/modules/products/actions';

import * as S from './styles';

export default function ProductAdd() {
  const [form, setForm] = useState({
    product_name: '',
    product_price: '',
  });

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addProduct(form.product_name, form.product_price));
  }

  function onInputChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <S.Container>
      <h1>Adicionar novo produto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="product_name"
          value={form.product_name}
          onChange={onInputChange}
        />
        <input
          type="text"
          name="product_price"
          value={form.product_price}
          onChange={onInputChange}
        />
        <button type="submit">Adicionar</button>
      </form>
    </S.Container>
  );
}
