import { PageError } from "@common/errors/AppError";
import { ImageField } from "@api/types/fields/image";

export interface PageData<T extends unknown[]> {
  id: string;
  internalName: string;
  slug: Record<string, string>;
  url: string;
  heading: string;
  description: string;
  image: ImageField;
  modules: T;

  canonical: string;
  metaDescription: string;
  nofollow: boolean;
  noindex: boolean;
  title: string;

  childPages: Record<string, PageData<never>>;
}

export interface GenericPage {
  context: {
    dictionary: Record<string, string>;
  };
  locale: string;
  preview: boolean;
  error?: PageError;
  [key: string]: unknown;
}

export interface Page<Page, Data> extends GenericPage {
  page: Page;
  data: Data;
}
