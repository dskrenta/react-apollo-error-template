import React from 'react';
import { gql, graphql } from 'react-apollo';

const AddPost = ({ addPost }) => (
  <button onClick={addPost}>Add Post</button>
);

const AddPostMutation = gql`
  mutation($text: String) {
    add_post(text: $text) {
      post {
        id
        title
      }
    }
  }
`;

const FeedQuery = gql`
  query timeline {
    timeline {
      total_results
      search_after
      results {
        id
        title
      }
    }
  }
`;

export default graphql(AddPostMutation, {
  props({ mutate }) {
    return {
      addPost() {
        return mutate({
          variables: {
            text: 'Sample post.'
          },
          update(proxy, { data: { add_post } }) {
            const data = proxy.readQuery({
              query: FeedQuery
            });
            data.timeline.results.unshift(add_post.post);
            proxy.writeQuery({
              query: FeedQuery,
              data
            });
          }
        });
      }
    };
  }
})(AddPost);
