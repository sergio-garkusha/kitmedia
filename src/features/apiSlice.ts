import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface SlideData {
  id: number;
  type: "image" | "video";
  src: string;
  duration: number;
}

const mockPlaylistData: SlideData[] = [
  {
    id: 1,
    type: "image",
    src: "https://via.placeholder.com/800x600.png?text=Sample+Image+1",
    duration: 5,
  },
  {
    id: 2,
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: 10,
  },
  {
    id: 3,
    type: "image",
    src: "https://via.placeholder.com/800x600.png?text=Sample+Image+2",
    duration: 4,
  },
];

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: builder => ({
    fetchPlaylist: builder.query<SlideData[], void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        return { data: mockPlaylistData };
      },
    }),
  }),
});

export const { useFetchPlaylistQuery } = apiSlice;
