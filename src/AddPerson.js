import React from 'react';
import { gql, graphql } from 'react-apollo';

const AddPerson = ({ addPerson }) => (
  <div>
    <button onClick={addPerson}>Add Person</button>
  </div>
);

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
})(AddPerson);
