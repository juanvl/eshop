import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ProductAdd from '~/pages/ProductAdd';
import ProductCart from '~/pages/ProductCart';
import ProductList from '~/pages/ProductList';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/add" exact component={ProductAdd} />
        <Route path="/cart" exact component={ProductCart} />
      </Switch>
    </BrowserRouter>
  );
}
