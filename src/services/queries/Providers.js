import gql from 'graphql-tag';

export const getListOfProvidersQuery = gql`
  query getListOfProviders(
    $query: String = "%%"
    $limit: Int = 10
    $offset: Int = 0
    $order_by: providers_order_by! = {}
  ) {
    providers(
      where: {
        _or: {
          commercial_name: { _ilike: $query }
          legal_name: { _ilike: $query }
        }
        is_active: { _eq: true }
      }
      offset: $offset
      limit: $limit
      order_by: [$order_by]
    ) {
      logo_url
      id
    }
    providers_aggregate(
      where: { commercial_name: { _ilike: $query }, is_active: { _eq: true } }
      offset: $offset
      limit: $limit
    ) {
      aggregate {
        count
      }
    }
  }
`;

export const getProviderDetailsQuery = gql`
  query getProviderDetail($id: uuid = "") {
    providers(where: { id: { _eq: $id } }) {
      address
      b2b_email
      b2b_phone
      commercial_name
      details
      logo_url
    }
  }
`;

export const getProviderCategory = gql`
  query getProviderCategory {
    provider_categories(
      where: { category: { is_active: { _eq: true } } }
      distinct_on: category_id
    ) {
      category {
        name
        id
      }
    }
  }
`;
