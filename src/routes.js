import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DefaultLayout from '~/pages/_layouts/default';
import ProductAdd from '~/pages/ProductAdd';
import ProductCart from '~/pages/ProductCart';
import ProductList from '~/pages/ProductList';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout>
          <Route path="/" exact component={ProductList} />
          <Route path="/add" exact component={ProductAdd} />
          <Route path="/cart" exact component={ProductCart} />
        </DefaultLayout>
      </Switch>
    </BrowserRouter>
  );
}
