<template>
  <div>
    <e-panel title="title12">
      <div>
        <h1>123</h1>
      </div>
      <template #footer> footer </template>
    </e-panel>

    <e-panel title="title12" type="success">
      <div>
        <h1>123</h1>
      </div>
      <template #footer> footer </template>
    </e-panel>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'index',
});
</script>
<style></style>
