import { createSignal } from 'solid-js';

import { css } from 'solid-styled-components';

function MyComponent(props: any) {
  const [name, setName] = createSignal('Steve');

  return (
    <div>
      <input
        class={css({
          color: 'red'
        })}
        value={name()}
        onInput={(event) => setName(event.currentTarget.value)}
      />
      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  );
}

export default MyComponent;
