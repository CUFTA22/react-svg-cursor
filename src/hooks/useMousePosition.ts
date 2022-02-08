import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  const updatePosition = (event: MouseEvent | any) => {
    const { clientX, clientY } = event;

    setPosition({
      clientX,
      clientY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return position;
};

export default useMousePosition;
