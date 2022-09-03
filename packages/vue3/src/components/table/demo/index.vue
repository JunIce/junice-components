<template>
  <div>
    <e-table :options="options" :data="data" :custom-row-class="customRowClass" align="left">
      <template #role="{ row }">
        <button>{{ row.role }}</button>
      </template>
    </e-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'index',
  setup() {
    const options = ref([
      {
        title: '#',
        prop: '$index',
      },
      {
        title: 'First Name',
        prop: 'firstName',
      },
      {
        title: 'Last Name',
        prop: 'lastName',
      },
      {
        title: 'Username',
        prop: 'username',
      },
      {
        title: 'Role',
        prop: 'role',
      },
    ]);

    const data = ref(
      new Array(10).fill(1).map((_, idx) => {
        return {
          id: idx,
          firstName: 'jack_' + idx,
          lastName: 'lucy_' + idx,
          username: 'userName_' + idx,
          role: 'lee_' + idx,
        };
      }),
    );

    const customRowClass = ({ row, index }) => {
      return index == 2 ? 'success' : '';
    };
    return {
      options,
      data,
      customRowClass,
    };
  },
});
</script>
<style></style>
