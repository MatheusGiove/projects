import React from "react";

const useMedia = (width: string) => {
  const [matches, setMatches] = React.useState(false);
  React.useEffect(() => {
    const media = () => {
      const match = window.matchMedia(width).matches;
      setMatches(match);
    };
    media();
    window.addEventListener("resize", media);
    return () => {
      window.removeEventListener("resize", media);
    };
  }, [width]);

  return matches;
};

export default useMedia;
