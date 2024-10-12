export interface SlideData {
  id: number;
  type: "image" | "video";
  src: string;
  duration: number;
}

const data: SlideData[] = [
  {
    id: 1,
    type: "image",
    src: "https://placeholder.com/800x600.png?text=Sample+Image+1",
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
    src: "https://placeholder.com/800x600.png?text=Sample+Image+2",
    duration: 4,
  },
];

export const fetchPlaylist = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return data;
};
