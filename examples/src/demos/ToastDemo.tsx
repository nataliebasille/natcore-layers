import { createSignal, For } from "solid-js";
import type { Component } from "solid-js";
import { overlay, portal } from "../overlay";
import type { Layer } from "../../../src/layer";
import { Button } from "../components/button";
import { css } from "@emotion/css";
import classnames from "classnames";

type Toast = {
  message: string;
  intent: "info";
  dismiss: () => void;
};

const infoStyles = css`
  background-color: #e6f7ff;
  color: #004085;
  border-color: #bce8f1;
  border-radius: 0.25rem;
  padding: 0.75rem 1.25rem;
`;

const ToastContainer: Component<{
  layer: Layer;
  toastsList: Toast[];
}> = (props) => {
  return (
    <div
      class={classnames(
        props.layer.styles,
        css`
          display: flex;
          flex-direction: column-reverse;
          right: 32px;
          bottom: 32px;
          gap: 8px;
        `
      )}
    >
      <For each={props.toastsList}>
        {(toast) => (
          <div
            class={classnames(
              css`
                border-radius: 4px;
                padding: 8px;
                box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
                border: 1px solid rgba(0, 0, 0, 0.125);
              `,
              {
                [infoStyles]: toast.intent === "info",
              }
            )}
          >
            {toast.message}
          </div>
        )}
      </For>
    </div>
  );
};
export const ToastDemo: Component = () => {
  const layer = overlay.pushLayer();
  const [toasts, setToasts] = createSignal<Toast[]>([]);
  const [counter, setCounter] = createSignal(0);
  const showToast = () => {
    setCounter(counter() + 1);
    const dismiss = () => {
      setToasts((toasts) => toasts.filter((t) => t !== toast));
    };
    const toast: Toast = {
      message: `Here is your toast!! - ${counter()}`,
      intent: "info",
      dismiss,
    };

    setTimeout(() => {
      dismiss();
    }, 5000);

    setToasts((toasts) => [...toasts, toast]);
  };

  return (
    <>
      <Button onClick={showToast}>Show Toast</Button>
      {portal(<ToastContainer layer={layer} toastsList={toasts()} />)}
    </>
  );
};
