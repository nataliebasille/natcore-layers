import { css } from "@emotion/css";
import classnames from "classnames";
import type { Component } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";

type ButtonProps = {
  class?: string;
  style?: JSX.CSSProperties;
  children?: JSX.Element | JSX.Element[];
  onClick?: () => void;
};

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button
      class={classnames(
        css`
          display: flex;
          align-items: center;

          padding: 8px 16px;
          border-radius: 4px;
          border: 1px solid #eaeaea;
          background-color: #fafafa;
          color: #333;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        `,
        props.class
      )}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
