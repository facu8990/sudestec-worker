import { HtmlEscapedString } from "hono/utils/html";

export interface SiteData {
  title: string;
  description: string;
  children: HtmlEscapedString;
}

export interface SuccessResponse<T> {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: T[];
}

export interface ErrorResponse {
  code: number;
  message: string;
  data: {};
}

export interface CustomerTableData {
  navigation: HtmlEscapedString;
  rows: HtmlEscapedString;
}

export interface CustomerTypes {
  id: string;
  collectionId: string;
  collectionName: string;
  type: string;
}

export interface CustomerDetails {
  address: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  first: string;
  id: string;
  identification: number;
  last: string;
  phone: number;
  photo: string;
  type: string;
  updated: string;
  username: string;
  verified: boolean;
}
export interface Customer {
  id: string;
  collectionId: string;
  collectionName: string;
  email: string;
  first: string;
  last: string;
  phone: number;
  address: string;
  type: string;
}

