import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFetchPlaylistQuery } from "~/features/apiSlice";
import { RootState } from "~/app/store";
import { loadPlaylist, nextSlide } from "~/features/mediaplayerSlice";
import Slide from "./Slide";

const MediaPlayer: React.FC = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useFetchPlaylistQuery();
  const { currentSlide, playlist } = useSelector((state: RootState) => state.mediaplayer);

  useEffect(() => {
    if (data) {
      dispatch(loadPlaylist(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (isLoading || isError || !playlist.length) {
      return;
    }

    const duration = playlist[currentSlide].duration * 1000;
    const interval = setInterval(() => {
      dispatch(nextSlide());
    }, duration);

    return () => clearInterval(interval);
  }, [currentSlide, isLoading, isError, dispatch, playlist]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading playlist</div>;
  }

  return (
    <section className="stage">
      {playlist.length > 0 && (
        <Slide
          data={playlist[currentSlide]}
          duration={playlist[currentSlide].duration}
        />
      )}
    </section>
  );
};

export default MediaPlayer;
