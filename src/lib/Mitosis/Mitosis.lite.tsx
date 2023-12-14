/** @jsxImportSource @builder.io/mitosis */

import { useState } from '@builder.io/mitosis';

export default function MyComponent(props) {
  const [name, setName] = useState('Steve');

  return (
    <div>
      <input
        css={{
          color: 'red'
        }}
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
      />
      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  );
}
