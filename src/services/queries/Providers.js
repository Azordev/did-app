import gql from 'graphql-tag';

export const PROVIDERS = gql`
  query getListOfProviders(
    $query: String = "%%"
    $limit: Int = 100
    $offset: Int = 0
    $order_by: providers_order_by! = {}
  ) {
    providers(
      where: {
        _or: [
          { commercial_name: { _ilike: $query } }
          { legal_name: { _ilike: $query } }
        ]
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

export const PROVIDER_BY_ID = gql`
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
