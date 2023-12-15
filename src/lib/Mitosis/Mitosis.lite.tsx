/** @jsxImportSource @builder.io/mitosis */

// should mitosis compile if there are type errors?
export default function MyComponent(props: { id: string }) {
  return <label for={'label'}>{'label'}</label>;
}
