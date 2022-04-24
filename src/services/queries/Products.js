import gql from 'graphql-tag';

export const getListOfProductsQuery = gql`
  query getListOfProducts(
    $name: String = "%%"
    $limit: Int = 10
    $offset: Int = 0
    $order_by_price: order_by = null
    $order_by_name: order_by = null
  ) {
    providers {
      products(
        where: {
          _or: [
            { name: { _ilike: $name } }
            { description: { _ilike: $name } }
            {
              provider: {
                commercial_name: { _ilike: $name }
                legal_name: { _ilike: $name }
              }
            }
          ]
        }
        order_by: { base_price_sol: $order_by_price, name: $order_by_name }
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
            { name: { _ilike: $name } }
            { description: { _ilike: $name } }
            {
              provider: {
                commercial_name: { _ilike: $name }
                legal_name: { _ilike: $name }
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
