// Functions types
export interface actionCallbackReturnTypes {
  items: object[];
  totalItems: number;
}

export interface orderByParamTypes {
  label?: string;
  content?: string;
  column?: string;
}

export interface orderByGraphQLParamType {
  [key: string]: string;
}

export interface actionCallbackParamsTypes {
  limit: number;
  offset: number;
  query?: string;
  order_by?: orderByGraphQLParamType;
}

export type actionCallbackType =
  ({}: actionCallbackParamsTypes) => Promise<actionCallbackReturnTypes>;

// Database Models
// Users
export interface Users {
  __typename: 'users';
  username: string;
  id: string;
  avatar_url: string;
  is_active: boolean;
  type: string;
  created_at?: string;
  updated_at?: string;
  password?: string;
}

// Providers
export interface provider {
  __typename: 'providers';
  id: string;
  logo_url: string;
  address?: string;
  b2b_email?: string;
  b2b_phone?: string;
  commercial_name?: string;
  details?: string;
  is_active?: boolean;
  latitude?: string;
  longitude?: string;
  legal_name?: string;
  sales_email?: string;
  sales_phone?: string;
  created_at?: string;
  updated_at?: string;
  products?: product[];
  products_aggregate?: query_aggregate;
}

// Products
export interface product {
  __typename: 'products';
  id: string;
  base_price_sol: number;
  image_url: string;
  name: string;
  description: string;
  details?: string;
  available?: number;
  offer_discount?: number;
  provider_id?: string;
  unit_system?: string;
  with_offer?: boolean;
}

// Query returns
// Products

export interface getListOfProvidersReturnTypes {
  providers: provider[];
  providers_aggregate: query_aggregate;
}

export interface getProviderReturnType {
  providers: provider[];
}

// Users
export interface GetUsers {
  users: Users[];
}

// Util types
export interface query_aggregate {
  __typename: string;
  aggregate: query_aggregate_fields;
}

export interface query_aggregate_fields {
  __typename: string;
  count: number;
}
