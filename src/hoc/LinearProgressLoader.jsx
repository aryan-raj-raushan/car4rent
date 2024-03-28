import * as React from "react";
import LinearProgress from "@mui/joy/LinearProgress";

export const LinearProgressLoader = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <LinearProgress determinate value={progress} thickness={1} color="danger" />
  );
};
