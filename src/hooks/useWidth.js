import { useState, useEffect } from "react";

function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeWindow = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return width;
}

export default useWidth;
