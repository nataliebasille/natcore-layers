import { createSignal } from "solid-js";
import type { Component } from "solid-js";
import { overlay } from "../overlay";
import { css } from "@emotion/css";
import { Button } from "../components/button";
import classnames from "classnames";

export const MenuContainerExample: Component = () => {
  const layer = overlay.pushLayer();
  const [menuOpen, setMenuOpen] = createSignal(false);

  return (
    <div
      class={css`
        position: relative;
      `}
    >
      <Button
        class={css`
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

          & :last-child {
            margin-top: -6px;
            margin-left: 8px;
          }
        `}
        onClick={() => setMenuOpen(!menuOpen())}
      >
        <span>Menu</span> <div>⌄</div>
      </Button>
      {menuOpen() && (
        <div
          class={classnames(
            layer.styles,
            css`
              width: 275px;
              background: #fff;
              border-radius: 4px;
              padding: 16px;
              box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
            `
          )}
        >
          Menu options
        </div>
      )}
    </div>
  );
};
