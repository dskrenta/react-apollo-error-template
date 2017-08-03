import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import Feed from './Feed';
import AddPost from './AddPost';

class App extends Component {
  render() {
    return (
      <main>
        <Feed />
        <AddPost />
      </main>
    );
  }
}

/*
const AddPersonMutation = gql`
  mutation($name: String!) {
    addPerson(name: $name) {
      id
      name
    }
  }
`;

const PeopleQuery = gql`
  {
    people {
      id
      name
    }
  }
`;

export default graphql(AddPersonMutation, {
  props({ mutate }) {
    return {
      addPerson(postText) {
        return mutate({
          variables: {
            name: 'Jane'
          },
          update(proxy, { data: { addPerson } }) {
            console.log(addPerson);
            const data = proxy.readQuery({
              query: PeopleQuery
            });
            data.people.push(addPerson);
            proxy.writeQuery({
              query: PeopleQuery,
              data
            });
          }
        });
      }
    }
  }
})(App);
*/

export default App;
