import React from 'react';
import { gql, graphql } from 'react-apollo'

const Feed = ({ data: { loading, timeline } }) => {
  if (loading) return <h1>Loading...</h1>;
  return (
    <ul>
      {timeline.results.map(item => (
        <li key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};

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

export default graphql(FeedQuery)(Feed);
