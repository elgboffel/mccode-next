import { apiFetcher } from "@common/fetchers/apiFetcher";
import { ApiArgsBase } from "@api/types/base/api";
import { PageResponse } from "@api/types/pages/page";

export interface Path {
  id: string;
  contentType: string;
  slug: Record<string, string>;
  locale: string;
  childPages: Record<string, string[]>;
  parents: Record<string, string[]>;
  urls: Record<string, string[]>;
}

const getPaths = async ({ preview }: ApiArgsBase = {}) =>
  await apiFetcher<{ paths: Path[] }>(
    "contentful/pages/get-paths",
    {
      method: "GET",
    },
    preview
  );

const getPage = async ({ preview }: ApiArgsBase) =>
  await apiFetcher<PageResponse>(
    "contentful/page",
    {
      method: "GET",
    },
    preview
  );

export interface GetPageBySlugArgs extends ApiArgsBase {
  url: string;
}

const getPageBySlug = async ({ preview, url, locale }: GetPageBySlugArgs) =>
  await apiFetcher<PageResponse>(
    `contentful/page/by-slug/${locale}/${encodeURIComponent(url)}`,
    {
      method: "GET",
    },
    preview
  );

export const contentfulApi = { getPaths, getPage, getPageBySlug };
