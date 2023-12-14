<script lang="ts">
  let name = 'Steve';
</script>

<div>
  <input
    class="input"
    value={name}
    on:change={(event) => {
      name = event.currentTarget.value;
    }}
  />
  Hello! I can run in React, Vue, Solid, or Liquid!
</div>

<style>
  .input {
    color: red;
  }
</style>
