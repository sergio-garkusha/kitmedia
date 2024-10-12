import { useEffect, useState } from "react";
import { SlideData } from "~/api/mockLoader";

const Slide = ({ data, duration }: { data: SlideData; duration: number }) => {
  const [countdown, setCountdown] = useState(duration);

  useEffect(() => {
    setCountdown(duration);

    const countdownInterval = setInterval(() => {
      setCountdown(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [duration]);

  let slide;
  if (data.type === "image") {
    slide = (
      <img
        src={data.src}
        alt="Slide"
      />
    );
  } else if (data.type === "video") {
    slide = (
      <video
        src={data.src}
        controls={false}
        autoPlay
      />
    );
  }

  return (
    <div>
      <div>{countdown} sec</div>
      {slide}
    </div>
  );
};

export default Slide;
