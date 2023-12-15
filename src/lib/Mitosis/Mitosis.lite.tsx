/** @jsxImportSource @builder.io/mitosis */

import { Show, useRef, useStyle } from '@builder.io/mitosis';

export interface InputForBasicInput {
  label?: string;
  placeholder?: string;
  id: string;
  leadingIcon?: string;
  trailingIcon?: string;
  hasCloseButton?: boolean;
  hasUnderline?: boolean;
  text?: string;
}

export default function BasicInput(props: InputForBasicInput) {
  useStyle(`
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
}

.form__field {

  border: 0;
  outline: 0;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}

.form__field:placeholder-shown ~ .form__label {
  cursor: text;
  top: 20px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
}

.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-color: #111f30;
}
.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #111f30;
  font-weight: 700;
}

.form__iconito{
  color: #9b9b9b;
  width: 1rem;
  height: 1rem;
}
.form__iconito__closito{
  color: #9b9b9b;
  width: 1rem;
  height: 1rem;
}

.form__group:focus-within .form__iconito__closito {
  color: red;
  width: 1.25rem;
  height: 1.25rem;
}
.form__group:focus-within .form__iconito {
  color: #111f30;
  width: 1.25rem;
  height: 1.25rem;
}

/* reset input */
.form__field:required, .form__field:invalid {
  box-shadow: none;
}
  `);
  const ref = useRef({ hello: 'wold' } as any as HTMLInputElement);

  return (
    <div class="form__group field flex text-light-text">
      <Show when={props.leadingIcon}>
        <i
          class={
            'form__iconito pt-2 mr-2 transition-all duration-300 ease-in-out' + props.leadingIcon
          }
        ></i>
      </Show>
      <input
        ref={ref}
        type="input"
        class="form__field flex-grow"
        style={{
          borderBottom: props.hasUnderline ? '2px solid #9b9b9b' : ''
        }}
        placeholder={props.placeholder ?? ''}
        name={props.placeholder ?? ''}
        id={props.id}
        onChange={(event) => {
          props.text = event.target.value;
        }}
        value={props.text}
        required
      />
      <Show when={props.hasCloseButton}>
        <i
          onClick={() => {
            props.text = '';
          }}
          class={
            'form__iconito__closito pt-2 pr-5 transition-all duration-300 ease-in-out fa-solid fa-xmark'
          }
        >
          Hello World {props.label}
        </i>
      </Show>
      <Show when={props.trailingIcon}>
        <i
          class={
            'form__iconito pt-2 pr-5 transition-all duration-300 ease-in-out' + props.trailingIcon
          }
        ></i>
      </Show>
      <Show when={props.label}>
        <label for={props.id} class={'form__label' + (props.leadingIcon ? 'pl-6' : '')}>
          {[].map((item, i) => (
            <li key={i}>Test</li>
          ))}
        </label>
      </Show>
      <span style={{ color: 'blue' }}>Hello world</span>
    </div>
  );
}
