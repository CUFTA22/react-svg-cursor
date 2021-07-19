import React from "react";
import { any, number, string } from "prop-types";
import useMousePosition from "../hooks/useMousePosition";
import "../styles/index.css";

export const CustomCursor = ({
  component,
  width,
  height,
  transform,
  zIndex,
}) => {
  const { clientX, clientY } = useMousePosition();

  const styles = {
    left: `${clientX}px`,
    top: `${clientY}px`,
    width: `${width}px`,
    height: `${height}px`,
    transform,
    zIndex,
  };

  return <img src={component} style={styles} className="rsc-cursor" />;
};

CustomCursor.propTypes = {
  /**
   * Svg that will replace cursor
   */
  component: any.isRequired,
  /**
   * Width of custom cursor, default = 18px
   */
  width: any,
  /**
   * Height of custom cursor, default = 18px
   */
  height: number,
  /**
   * Transform function, rotate and position the cursor however you want
   */
  transform: string,
  /**
   * Add custom z-index, default = 999
   */
  zIndex: number,
};

CustomCursor.defaultProps = {
  width: 18,
  height: 18,
  transform: "none",
  zIndex: 999,
};
