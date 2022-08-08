import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  const [value, setValue] = createSignal("Hello World");

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <div class={styles.txt}>
          <div>{value}</div>
          <input type="text" oninput={e => setValue(e.currentTarget.value)} />
        </div>
      </header>
    </div>
  );
};

export default App;
