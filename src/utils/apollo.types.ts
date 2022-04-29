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

export interface queryResultTypes {
  users?: any;
  providers?: any;
  providers_aggregate?: any;
}

// Database Models
// TODO: ADD database models
