<template>
  <div>
    <section>
      <e-button>default</e-button>
      <e-button type="primary">primary</e-button>
      <e-button type="info">info</e-button>
      <e-button type="success">success</e-button>
      <e-button type="danger">danger</e-button>
      <e-button type="warning">warning</e-button>
    </section>

    <section>
      <e-button outline>default</e-button>
      <e-button outline type="primary">primary</e-button>
      <e-button outline type="info">info</e-button>
      <e-button outline type="success">success</e-button>
      <e-button outline type="danger">danger</e-button>
      <e-button outline type="warning">warning</e-button>
    </section>

    <section>
      <e-button disabled>default</e-button>
      <e-button disabled type="primary">primary</e-button>
      <e-button disabled type="info">info</e-button>
      <e-button disabled type="success">success</e-button>
      <e-button disabled type="danger">danger</e-button>
      <e-button disabled type="warning">warning</e-button>
    </section>

    <section>
      <e-button round>default</e-button>
      <e-button round type="primary">primary</e-button>
      <e-button round type="info">info</e-button>
      <e-button round type="success">success</e-button>
      <e-button round type="danger">danger</e-button>
      <e-button round type="warning">warning</e-button>
    </section>

    <section>
      <e-button size="large" type="primary">primary</e-button>
      <e-button size="small" type="info">info</e-button>
      <e-button size="mini" type="success">success</e-button>
    </section>
    <section>
      <e-button block type="primary">primary</e-button>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'index',
});
</script>
<style></style>
