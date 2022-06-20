import gql from 'graphql-tag';

export const PRODUCTS_BY_PROVIDER = gql`
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

export const PRODUCT_BY_ID = gql`
  query getDetailProduct($id: uuid = "") {
    products(where: { id: { _eq: $id } }) {
      base_price_sol
      description
      name
      image_url
      id
    }
  }
`;

export const PRODUCTS_BY_ID = gql`
  query getListOfProducts($list: [products_bool_exp!]) {
    products(where: { _or: $list }) {
      name
      id
      base_price_sol
      unit_system
    }
  }
`;
