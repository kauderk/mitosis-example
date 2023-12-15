export interface MyComponentProps {}

function MyComponent(props: MyComponentProps) {
  let ref;

  return <div ref={ref!}>Hello</div>;
}

export default MyComponent;
