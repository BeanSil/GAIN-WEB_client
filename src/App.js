import React, {Fragment} from 'react';
import { hot } from 'react-hot-loader';
import {Route} from "react-router-dom"
import {ConnectedRouter} from "connected-react-router";
import {Provider} from "react-redux";


import {Home, Main} from './pages'
// 페이지 모듈


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {store, history} = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <RoutesComponent />
        </ConnectedRouter>
      </Provider>
    );
  }
}

const RoutesComponent = () => (
  <Fragment>
    <Route exact path="/" component={Main} />
    <Route exact path="/Home" component={Home} />
  </Fragment>
)

export default hot(module)(App);
