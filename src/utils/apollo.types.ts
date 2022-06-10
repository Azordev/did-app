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

// Query return
export interface GetUsers {
  users: Users[];
}

// Category
export interface category {
  __typename?: 'categories';
  id: string;
  name: string;
}

// Providers
export interface Provider {
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

export interface provider_category {
  __typename?: 'provider_categories';
  category: category;
}

// Query returns
export interface getListOfProvidersReturnTypes {
  providers: Provider[];
  providers_aggregate: query_aggregate;
}

export interface getProviderReturnType {
  providers: Provider[];
}

export interface GetProvidersCategories {
  provider_categories: provider_category[];
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
export interface getListOfProvidersReturnTypes {
  providers: Provider[];
  providers_aggregate: query_aggregate;
}

export interface getProviderReturnType {
  providers: Provider[];
}

export interface getProductByIdReturnTypes {
  products: product[];
}

// Events
export interface Event {
  __typename: 'events';
  id: string;
  title: string;
  image_url?: string;
  date: string;
  type: 'PRIVATE' | 'PUBLIC';
}

// Query returns
export interface getListOfEventsReturnTypes {
  events: Event[];
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
