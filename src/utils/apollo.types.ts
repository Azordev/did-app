// Database Models
// User
export enum UserType {
  MEMBER = 'MEMBER',
  PROVIDER = 'PROVIDER',
  ADMIN = 'ADMIN',
}

export type Subscriptions = {
  __typename: 'subscriptions';
  expiration: string;
};

export type MemberInformation = {
  __typename: 'members';
  id: string;
  first_names: string;
  last_names: string;
  email: string;
  subscriptions: Subscriptions[];
};

export interface User {
  __typename: 'users';
  member_code: string;
  id: string;
  avatar_url?: string;
  is_active: boolean;
  type: UserType.MEMBER | UserType.PROVIDER | UserType.ADMIN;
  member_info: MemberInformation;
  created_at?: string;
  updated_at?: string;
  password?: string;
}

// Query return
export interface Users {
  users: User[];
}
export interface getUserReturnType {
  users_by_pk: User;
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
  products?: Product[];
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
export interface Product {
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
  products: Product[];
}

export interface GetProductsByIdReturnTypes {
  products: Product[];
}

// Inscriptions
export interface Inscriptions {
  id: string;
  member_id: string;
  event_id: string;
}

// Events
export enum EventType {
  PRIVATE = 'ATTENDANCE',
  PUBLIC = 'WORKSHOP',
}

export interface Event {
  __typename: 'events';
  id: string;
  title: string;
  description?: string;
  image_url?: string;
  date: string;
  type: EventType.PRIVATE | EventType.PUBLIC;
  inscriptions: Inscriptions[];
}

// Query returns
export interface getListOfEventsReturnTypes {
  events: Event[];
}

export interface EventByPKReturnTypes {
  events_by_pk: Event;
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
