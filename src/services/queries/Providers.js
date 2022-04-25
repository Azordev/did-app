import gql from 'graphql-tag';

export const getListOfProvidersQuery = gql`
  query getListOfProviders(
    $query: String = "%%"
    $limit: Int = 10
    $offset: Int = 0
    $order_by_name: order_by = null
  ) {
    providers(
      where: { commercial_name: { _ilike: $query }, is_active: { _eq: true } }
      offset: $offset
      limit: $limit
      order_by: { legal_name: $order_by_name }
    ) {
      logo_url
    }
    providers_aggregate(
      where: { commercial_name: { _ilike: $query }, is_active: { _eq: true } }
      offset: $offset
      limit: $limit
      order_by: { legal_name: $order_by_name }
    ) {
      aggregate {
        count
      }
    }
  }
`;
