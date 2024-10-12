import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SlideData, fetchPlaylist } from "~/api/mockLoader";
import { RootState } from "~/app/store";
import { loadSlides, nextSlide } from "~/features/sliderSlice";

import Slide from "./Slide";

const MediaPlayer = () => {
  const dispatch = useDispatch();
  const { currentSlide, isLoading, slides } = useSelector((state: RootState) => state.mediaplayer);

  useEffect(() => {
    fetchPlaylist().then((data: SlideData[]) => dispatch(loadSlides(data)));
  }, []);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const interval = setInterval(() => {
      dispatch(nextSlide());
    }, slides[currentSlide].duration * 1000);
    return () => clearInterval(interval);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <Slide
        data={slides[currentSlide]}
        duration={slides[currentSlide].duration}
      />
    </section>
  );
};

export default MediaPlayer;
