import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BugerBuilder from './containers/BugerBuilder/BugerBuilder';
import Checkout from './containers/Chechout/Checkout';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch> 
            <Route path="/checkout" component={Checkout}/>
            <Route path="/" exact component={BugerBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
