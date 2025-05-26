export type Task = {
  id: number;
  label: string;
  done: boolean;
};

export type UserInfo = {
  id: string;
  name: string;
  icon: string;
};

export type AuthHeader = {
  authorization: string;
};

export type ArticleInfo = {
  id: number;
  title: string;
  body: string;
};

export type CompanyInfo = {
  id: number;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  logo?: string;
  createdAt: string;
  updatedAt: string;
};

export type BusinessContentInfo = {
  id: number;
  title: string;
  description: string;
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type ExecutiveInfo = {
  id: number;
  name: string;
  position: string;
  biography?: string;
  photo?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
};
