<template>
  <div>
    <e-tab>
      <e-tab-pane title="Home" key="Home">
        <h1>home</h1>
      </e-tab-pane>
      <e-tab-pane title="Profile" key="Profile">
        <h1>Profile</h1>
      </e-tab-pane>
      <e-tab-pane title="Messages" key="Messages">
        <h1>Messages</h1>
      </e-tab-pane>
      <e-tab-pane title="Settings" key="Settings">
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
