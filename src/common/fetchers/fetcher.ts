const baseInit: RequestInit = {
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
};

export const fetcher = async (
  input: string,
  init?: RequestInit
): Promise<Response> => {
  return fetch(input, {
    ...baseInit,
    ...init,
    headers: {
      ...baseInit.headers,
      ...init?.headers,
    },
  });
};
