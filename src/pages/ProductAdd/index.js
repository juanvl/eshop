import React, { useState, useEffect } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import Input from '~/components/Input';
import { addProduct } from '~/store/modules/productsList/actions';

import * as S from './styles';

export default function ProductAdd({ history }) {
  const emptyForm = {
    product_name: '',
    product_price: '',
  };
  const [form, setForm] = useState(emptyForm);

  const products = useSelector(state => state.productsList.products);

  const dispatch = useDispatch();

  let firstRender = true;

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    history.push('/');
  }, [products]);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addProduct(form.product_name, form.product_price));

    setForm(emptyForm);
  }

  function onInputChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <S.Container>
      <div>
        <Link to="/">
          <MdArrowBack />
        </Link>
        <h1>Adicionar novo produto</h1>
        <span />
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="product_name"
          placeholder="Nome do produto"
          value={form.product_name}
          onChange={onInputChange}
          required
        />
        <Input
          type="number"
          min="1"
          step="any"
          name="product_price"
          placeholder="Preço"
          value={form.product_price}
          onChange={onInputChange}
          required
        />

        <Button type="submit">Adicionar</Button>
      </form>
    </S.Container>
  );
}
