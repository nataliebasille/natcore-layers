import { css } from "@emotion/css";
import classnames from "classnames";
import { createSignal } from "solid-js";
import type { Component } from "solid-js";
import { Button } from "../components/button";
import { overlay, portal } from "../overlay";
import { clickOutside } from "../directives/clickOutside";

const Modal: Component<{
  close: () => void;
}> = (props) => {
  const layer = overlay.pushLayer({ blocking: true });

  return portal(
    <>
      <div
        use:clickOutside={props.close}
        class={classnames(
          layer.styles,
          css`
            background: #fff;
            border-radius: 4px;
            padding: 20px;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            position: fixed !important;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          `
        )}
      >
        modal
      </div>
      <div
        class={classnames(
          layer.blocker?.styles,
          css`
            background: rgba(0, 0, 0, 0.5);
          `
        )}
      ></div>
    </>
  );
};

export const ModalDemo: Component = () => {
  const [showModal, setShowModal] = createSignal(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Open Modal</Button>
      {showModal() && <Modal close={() => setShowModal(false)} />}
    </>
  );
};
