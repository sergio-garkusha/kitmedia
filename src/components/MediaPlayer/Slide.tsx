import { useEffect, useState } from "react";
import { SlideData } from "~/api/mockLoader";

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
        src={data.src}
        alt="Slide"
      />
    );
  } else if (data.type === "video") {
    slide = (
      <video
        width={800}
        height={600}
        src={data.src}
        controls={false}
        muted
        autoPlay
      />
    );
  }

  return (
    <div>
      {duration && <div style={{ margin: "0 0 5px 0" }}>{countdown} sec</div>}
      {slide}
    </div>
  );
};

export default Slide;
