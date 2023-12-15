<script context="module" lang="ts">
  /** @jsxImportSource @builder.io/mitosis */

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
</script>

<script lang="ts">
  export let leadingIcon: InputForBasicInput['leadingIcon'] = undefined;
  export let hasUnderline: InputForBasicInput['hasUnderline'] = undefined;
  export let placeholder: InputForBasicInput['placeholder'] = undefined;
  export let id: InputForBasicInput['id'];
  export let text: InputForBasicInput['text'] = undefined;
  export let hasCloseButton: InputForBasicInput['hasCloseButton'] = undefined;
  export let label: InputForBasicInput['label'] = undefined;
  export let trailingIcon: InputForBasicInput['trailingIcon'] = undefined;

  function mitosis_styling(node, vars) {
    Object.entries(vars || {}).forEach(([p, v]) => {
      if (p.startsWith('--')) {
        node.style.setProperty(p, v);
      } else {
        node.style[p] = v;
      }
    });
  }

  let ref;
</script>

<div class="form__group field flex text-light-text">
  {#if leadingIcon}
    <i class={'form__iconito pt-2 mr-2 transition-all duration-300 ease-in-out' + leadingIcon} />
  {/if}
  <input
    use:mitosis_styling={{
      borderBottom: hasUnderline ? '2px solid #9b9b9b' : ''
    }}
    type="input"
    class="form__field flex-grow"
    bind:this={ref}
    placeholder={placeholder ?? ''}
    name={placeholder ?? ''}
    {id}
    required={true}
    bind:value={text}
  />

  {#if hasCloseButton}
    <i
      class="form__iconito__closito pt-2 pr-5 transition-all duration-300 ease-in-out fa-solid fa-xmark"
      on:click={(event) => {
        text = '';
      }}
    >
      Hello World {label}
    </i>
  {/if}

  {#if trailingIcon}
    <i class={'form__iconito pt-2 pr-5 transition-all duration-300 ease-in-out' + trailingIcon} />
  {/if}

  {#if label}
    <label for={id} class={'form__label' + (leadingIcon ? 'pl-6' : '')}>
      {#each [] as item, i (i)}
        <li>Test</li>
      {/each}
    </label>
  {/if}
  <span
    use:mitosis_styling={{
      color: 'blue'
    }}>Hello world</span
  >
</div>

<style>
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

  .form__iconito {
    color: #9b9b9b;
    width: 1rem;
    height: 1rem;
  }
  .form__iconito__closito {
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
  .form__field:required,
  .form__field:invalid {
    box-shadow: none;
  }
</style>
