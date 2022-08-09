import type { Component } from "solid-js";

import { css } from "@emotion/css";
import { Container } from "./components/container";
import { MenuContainerExample } from "./demos/MenuContainerDemo";
import { ToastDemo } from "./demos/ToastDemo";
import { ModalDemo } from "./demos/ModalDemo";

const App: Component = () => {
  return (
    <div
      class={css`
        padding: 32px;
        display: grid;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-content: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 16px;
      `}
    >
      <Container>
        <MenuContainerExample />
      </Container>

      <Container>
        <ToastDemo />
      </Container>

      <Container>
        <ModalDemo />
      </Container>
    </div>
  );
};

export default App;
