import { useEffect, useState } from "react";
import { SlideData } from "~/features/apiSlice";

const Slide = ({ data, duration }: { data: SlideData; duration?: number }) => {
  const [countdown, setCountdown] = useState(duration || 0);

  if (duration) {
    useEffect(() => {
      setCountdown(duration);

      const countdownInterval = setInterval(() => {
        setCountdown(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(countdownInterval);
    }, [data.id]);
  }

  let slide;
  if (data.type === "image") {
    slide = (
      <img
        style={{ maxWidth: 800 }}
        src={data.src}
        alt="Slide"
      />
    );
  } else if (data.type === "video") {
    slide = (
      <video
        width={800}
        src={data.src}
        controls={false}
        muted
        autoPlay
      />
    );
  }

  return (
    <div>
      {slide}
      {duration && <div>{countdown} sec</div>}
    </div>
  );
};

export default Slide;
