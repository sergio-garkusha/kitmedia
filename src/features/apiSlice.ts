import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface SlideData {
  id: number;
  type: "image" | "video";
  src: string;
  duration: number;
}

const mockPlaylistData: SlideData[] = [
  {
    id: 0,
    type: "video",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Cat_lapping_water_off_ground_in_slow_motion.gk.webm",
    duration: 5,
  },
  {
    id: 1,
    type: "image",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/80/A_dog_-_36797913216.jpg",
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
    src: "https://upload.wikimedia.org/wikipedia/commons/7/77/A_dog_posing.jpg",
    duration: 4,
  },
  {
    id: 4,
    type: "image",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/June_odd-eyed-cat_cropped.jpg/640px-June_odd-eyed-cat_cropped.jpg",
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
