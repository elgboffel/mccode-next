import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { ParsedUrlQuery } from "querystring";
import { toUrlString } from "@common/helpers/toUrlString";
import {
  MIDDLELAYER_ALL_PATHS_PATH,
  MIDDLELAYER_GET_PAGE_BY_SLUG_PATH,
} from "@common/constants";

const Page: NextPage = ({ ...props }) => {
  const router = useRouter();
  // const templates = Templates;
  if (router.isFallback) return <div>Loading...</div>;

  // const Template = templates[template];

  if (!Page) return <>No page template/component found</>;

  return <div {...props} />;
};

type Paths = { params: ParsedUrlQuery };

type PublishedPath = {
  id: string;
  contentType: string;
  slug: string;
};

const toParams = (array: Array<PublishedPath>) => {
  return array.reduce((paths: Paths[], publishedPath: PublishedPath) => {
    if (!publishedPath) return paths;

    paths.push({
      params: {
        slug:
          publishedPath?.slug === "/"
            ? (false as any)
            : publishedPath?.slug.split("/").filter((x) => x),
      },
    });

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
  const result = (await content.json()) as { paths: PublishedPath[] };

  const paths = toParams(result.paths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
    }/${MIDDLELAYER_GET_PAGE_BY_SLUG_PATH}/${encodeURIComponent(url)}`,
    { headers }
  );
  const props = await content.json();

  return {
    props,
    revalidate: 1,
  };
};

export default Page;
