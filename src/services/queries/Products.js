import gql from 'graphql-tag';

export const getListOfProductsQuery = gql`
  query getListOfProducts(
    $query: String = "%%"
    $limit: Int = 10
    $offset: Int = 0
    $order_by: products_order_by! = {}
  ) {
    providers {
      products(
        where: {
          _or: [
            { name: { _ilike: $query } }
            { description: { _ilike: $query } }
            {
              provider: {
                commercial_name: { _ilike: $query }
                legal_name: { _ilike: $query }
              }
            }
          ]
        }
        order_by: [$order_by]
        offset: $offset
        limit: $limit
      ) {
        id
        available
        description
        name
        base_price_sol
        details
        image_url
        offer_discount
        provider {
          commercial_name
        }
      }
      products_aggregate(
        where: {
          _or: [
            { name: { _ilike: $query } }
            { description: { _ilike: $query } }
            {
              provider: {
                commercial_name: { _ilike: $query }
                legal_name: { _ilike: $query }
              }
            }
          ]
        }
      ) {
        aggregate {
          count(columns: available)
        }
      }
    }
  }
`;

export const getProviderProductsQuery = gql`
  query getProviderProducts($id: uuid = "", $query: String = "") {
    providers(where: { id: { _eq: $id } }) {
      products(
        where: { name: { _ilike: $query }, description: { _ilike: $query } }
      ) {
        id
        available
        description
        name
        base_price_sol
        details
        image_url
        offer_discount
      }
    }
  }
`;
