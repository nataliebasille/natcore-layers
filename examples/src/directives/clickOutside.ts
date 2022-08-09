import { Accessor, onCleanup } from "solid-js";

declare module "solid-js" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface Directives {
      clickOutside: (handler: (e: MouseEvent) => void) => void;
    }
  }
}

export const clickOutside = (
  el: Element,
  callbackAccessor: Accessor<() => void>
) => {
  const onClick = (e: MouseEvent) =>
    !el.contains(e.target as HTMLElement) && callbackAccessor()?.();
  document.body.addEventListener("click", onClick);

  onCleanup(() => document.body.removeEventListener("click", onClick));
};
