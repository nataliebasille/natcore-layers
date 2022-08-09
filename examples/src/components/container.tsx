import { css } from "@emotion/css";
import type { Component, JSX } from "solid-js";

type ContainerProps = {
  children: JSX.Element | JSX.Element[];
};
export const Container: Component<ContainerProps> = ({ children }) => {
  return (
    <div
      class={css`
        border-radius: 4px;
        border: 1px solid #eaeaea;
        padding: 16px;
      `}
    >
      {children}
    </div>
  );
};
