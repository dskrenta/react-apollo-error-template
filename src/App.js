import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import Feed from './Feed';
import AddPost from './AddPost';

class App extends Component {
  render() {
    const { addPost } = this.props;
    return (
      <main>
        <AddPost />
        <Feed />
      </main>
    );
  }
}

export default App;
