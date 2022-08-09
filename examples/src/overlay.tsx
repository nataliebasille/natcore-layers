import { createLayerStack } from "@layers";
import type { JSX } from "solid-js/jsx-runtime";
import { Portal } from "solid-js/web";

const overlayRef = document.getElementById("overlay");
export const overlay = createLayerStack();

export const portal = (content: JSX.Element) => {
  return <Portal mount={overlayRef ?? undefined}>{content}</Portal>;
};
