import type { PositiveNumber } from "./utils/types";
import { css } from "@emotion/css";

export type Layer = {
  styles: string;
  blocker?: {
    styles: string;
  };
};

export type CreateLayerOptions = {
  readonly blocking?: boolean;
};

export function createLayer<N extends number>(
  layerIndex: PositiveNumber<N>,
  options: CreateLayerOptions & { blocking: true }
): Layer & { blocker: Layer["blocker"] };

export function createLayer<N extends number>(
  layerIndex: PositiveNumber<N>,
  options?: CreateLayerOptions
): Omit<Layer, "blocker">;

export function createLayer<N extends number>(
  layerIndex: PositiveNumber<N>,
  options: CreateLayerOptions = {}
): Layer {
  const { blocking = false } = options;
  const layerStyles = css({
    zIndex: `${Math.floor(1000 * layerIndex + 500)}`,
    position: "absolute" as const,
  });
  const blockingStyles = !blocking
    ? undefined
    : css({
        zIndex: `${Math.floor(1000 * layerIndex + 50)}`,
        position: "absolute" as const,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      });

  return {
    styles: layerStyles,
    ...(blockingStyles && { blocker: { styles: blockingStyles } }),
  };
}
