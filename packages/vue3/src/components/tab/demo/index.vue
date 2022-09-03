<template>
  <div>
    <e-tab>
      <e-tab-pane title="Home">
        <h1>home</h1>
      </e-tab-pane>
      <e-tab-pane title="Profile">
        <h1>Profile</h1>
      </e-tab-pane>
      <e-tab-pane title="Messages">
        <h1>Messages</h1>
      </e-tab-pane>
      <e-tab-pane title="Settings">
        <h1>Settings</h1>
      </e-tab-pane>
    </e-tab>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'index',
});
</script>
<style></style>
