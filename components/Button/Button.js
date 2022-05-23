import React from "react";
import clsx from "clsx";

const Button = React.forwardRef(
  ({ children, primary, size = "medium" }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx("button", {
          ["button--primary"]: primary,
          ["button--small"]: size === "small",
          ["button--medium"]: size === "medium",
          ["button--large"]: size === "large",
        })}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
