import React from "react";
import useMousePosition from "../../hooks/useMousePosition";
import "../../styles/index.css";

interface ButtonProps {
  component: any;
  width?: number;
  height?: number;
  transform?: string;
  zIndex?: number;
  isDisabled?: boolean;
}

const CustomCursor: React.FC<ButtonProps> = ({
  component,
  width = 20,
  height = 20,
  transform = "none",
  zIndex = 999,
  isDisabled = false,
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

  if (!component) return null;

  const Svg = component;

  const Cursor = () => {
    return typeof component === "string" ? (
      <img src={component} style={styles} className="rsc-cursor" />
    ) : (
      <div style={styles} className="rsc-cursor">
        {typeof component === "function" ? <Svg /> : component}
      </div>
    );
  };

  return (
    <>
      {/* @ts-ignore */}
      <style jsx global>{`
        * {
          cursor: ${!isDisabled ? "none !important" : "unset"};
        }
      `}</style>
      {!isDisabled && <Cursor />}
    </>
  );
};

export default CustomCursor;
