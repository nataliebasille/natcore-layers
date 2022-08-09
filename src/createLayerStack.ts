import { createLayer, CreateLayerOptions, Layer } from "./layer";
import { PositiveNumber } from "./utils/types";

export type LayerStack = {
  pushLayer: (options?: CreateLayerOptions) => Layer;
  removeLayer: (layer: Layer) => void;
};

export const createLayerStack = (): LayerStack => {
  const layers: Layer[] = [];
  return {
    pushLayer: pushLayerFactory(layers),
    removeLayer: removeLayerFactory(layers),
  };
};

function pushLayerFactory(stack: Layer[]): LayerStack["pushLayer"] {
  return (options) => {
    const layer = createLayer(
      (stack.length + 1) as PositiveNumber<number>,
      options
    );
    stack.push(layer);

    return layer;
  };
}

function removeLayerFactory(stack: Layer[]): LayerStack["removeLayer"] {
  return (layer: Layer) => {
    const index = stack.indexOf(layer);

    if (index >= 0) {
      stack.splice(index, 1);
    }
  };
}
