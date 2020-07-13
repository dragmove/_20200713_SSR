import React, { Component } from 'react';

class AppComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Ref: https://www.youtube.com/watch?time_continue=123&v=Zjacr7_GZR0
    // https://reacttraining.com/react-router/web/example/basic
    return (
      <div>
        <header>header</header>
      </div>
    );
  }
}

export const App = AppComp;

const ClientSideApp = AppComp;

export default ClientSideApp;
