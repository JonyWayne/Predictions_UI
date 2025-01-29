import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const apiBaseUrl = import.meta.env.VITE_APP_API_BASE_URL;

export const baseQuery = (urlPath: string) =>
  fetchBaseQuery({
    baseUrl: `${apiBaseUrl}${urlPath}`,
  });
