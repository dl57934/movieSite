import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

const BoundaryHOC = ProtectedComponent => class HOC extends Component {
  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorWillMaking/>
    }
    else {
      return <ProtectedComponent/>
    }
  }
}


class ErrorMaker extends Component {
  state = {
    friends: ['sang', 'hoon', 'seoung', 'ho']
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  }
  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}

const PErrorMaker = BoundaryHOC(ErrorMaker);

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById('touchme'))
  }
}

const PPortals = BoundaryHOC(Portals);

const Message = () => "just Touch This";

class ReturnType extends Component {
  render() {
    return (
      "hi React"
    );
  }
}

const ErrorWillMaking = () => "something making";

class App extends Component {
  render() {

    return (
      <Fragment>
        <PPortals />
        <PErrorMaker/>
      </Fragment>
    );
  }
}

export default BoundaryHOC(App);
