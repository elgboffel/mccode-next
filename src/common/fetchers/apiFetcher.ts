import { fetcher } from "@common/fetchers/fetcher";

export const getApiUrl = (relativeUrl: string, preview?: boolean): string => {
  const baseUrl =
    typeof window === "undefined"
      ? preview
        ? process.env.MIDDLELAYER_API_PREVIEW_BASE_PATH
        : process.env.MIDDLELAYER_API_BASE_PATH
      : preview
      ? process.env.NEXT_PUBLIC_MIDDLELAYER_API_PREVIEW_BASE_PATH
      : process.env.NEXT_PUBLIC_MIDDLELAYER_BASE_PATH;

  return `${baseUrl}/${relativeUrl}`;
};

export const getApiHeader = () => {
  const headers: HeadersInit = new Headers();
  headers.set("Content-Type", "application/json");

  if (typeof window === "undefined") {
    headers.set(
      `${process.env.MIDDLELAYER_HEADER_API_KEY}`,
      `${process.env.MIDDLELAYER_HEADER_API_KEY_VALUE}`
    );
  } else {
    headers.set(
      `${process.env.NEXT_PUBLIC_MIDDLELAYER_HEADER_API_KEY}`,
      `${process.env.NEXT_PUBLIC_MIDDLELAYER_HEADER_API_KEY_VALUE}`
    );
  }

  return headers;
};

export const apiFetcher = async <Data>(
  url: string,
  init?: RequestInit | null,
  preview?: boolean,
  auth?: string
): Promise<Data> => {
  const headers: HeadersInit = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set(
    `${process.env.MIDDLELAYER_HEADER_API_KEY}`,
    `${process.env.MIDDLELAYER_HEADER_API_KEY_VALUE}`
  );

  const res = await fetcher(getApiUrl(url, preview), {
    ...init,
    headers: {
      ...(init?.headers ? { ...init.headers } : getApiHeader()),
      ...(auth && {
        Authorization: `Bearer ${auth}`,
      }),
    },
  });

  if (!res.ok) {
    const contentType = res.headers.get("content-type");

    const response =
      contentType && contentType.indexOf("application/json") !== -1
        ? await res.json()
        : await res.text();

    return Promise.reject({
      responseContent: response,
      statusCode: res.status,
      url: url,
    });
  }

  return await res.json();
};
