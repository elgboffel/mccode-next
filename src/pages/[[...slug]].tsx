import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { ParsedUrlQuery } from "querystring";
import { toUrlString } from "@common/helpers/toUrlString";
import {
  MIDDLELAYER_ALL_PATHS_PATH,
  MIDDLELAYER_GET_PAGE_BY_SLUG_PATH,
} from "@common/constants";
import { request, gql } from "graphql-request";
import useSWR from "swr";

const Page: NextPage = ({ ...props }) => {
  const router = useRouter();
  // const { data } = useSWR("/api/posts", fetcher, { initialData: props });
  // const templates = Templates;
  if (router.isFallback) return <div>Loading...</div>;

  // const Template = templates[template];

  if (!Page) return <>No page template/component found</>;

  return <div {...props} />;
};

type Paths = { params: ParsedUrlQuery; locale: string };

type Path = {
  id: string;
  contentType: string;
  slug: string | { [key: string]: string };
  locale: string;
};

const getSlug = (slug: string) =>
  slug === "/" ? (false as any) : slug.split("/").filter((x) => x);

const toParams = (array: Array<Path>) => {
  return array.reduce((paths: Paths[], publishedPath: Path) => {
    if (!publishedPath) return paths;

    const slug = publishedPath.slug;

    if (!slug) return paths;

    if (typeof slug === "string") {
      paths.push({
        params: {
          slug: getSlug(slug),
        },
        locale: publishedPath.locale,
      });

      return paths;
    }

    if (typeof slug === "object") {
      const localePaths = Object.keys(publishedPath.slug);

      localePaths.forEach((locale) => {
        paths.push({
          params: {
            slug: getSlug(slug[locale]),
          },
          locale,
        });
      });
      return paths;
    }

    return paths;
  }, []);
};

export const getStaticPaths: GetStaticPaths = async () => {
  const headers: HeadersInit = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set(
    `${process.env.MIDDLELAYER_HEADER_API_KEY}`,
    `${process.env.MIDDLELAYER_HEADER_API_KEY_VALUE}`
  );
  const content = await fetch(
    `${process.env.NEXT_PUBLIC_MIDDLELAYER_BASE_PATH}/${MIDDLELAYER_ALL_PATHS_PATH}`,
    {
      headers,
    }
  );
  const result = (await content.json()) as { paths: Path[] };

  const paths = toParams(result.paths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const headers: HeadersInit = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set(
    `${process.env.MIDDLELAYER_HEADER_API_KEY}`,
    `${process.env.MIDDLELAYER_HEADER_API_KEY_VALUE}`
  );
  const url = params?.slug ? toUrlString(params?.slug) : "/";
  const content = await fetch(
    `${
      process.env.NEXT_PUBLIC_MIDDLELAYER_BASE_PATH
    }/${MIDDLELAYER_GET_PAGE_BY_SLUG_PATH}/${encodeURIComponent(
      url
    )}/${locale}`,
    { headers }
  );
  const props = await content.json();

  return {
    props,
    revalidate: 1,
  };
};

export default Page;
