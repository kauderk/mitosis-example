/** @jsxImportSource @builder.io/mitosis */

import { useRef, useState } from '@builder.io/mitosis';

// should mitosis compile if there are type errors?
export default function MyComponent(props: {}) {
  const ref = useRef({} as HTMLDivElement);

  return <div ref={ref}>Hello</div>;
}
