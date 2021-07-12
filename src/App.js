import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BugerBuilder from './containers/BugerBuilder/BugerBuilder';
import Chekout from './containers/Chechout/Checkout';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
        <BugerBuilder/>
        <Chekout/>
        </Layout>
      </div>
    );
  }
}

export default App;
