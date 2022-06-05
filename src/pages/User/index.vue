<template>
  <div>
    User Page. This is the list of users of app:
    <ul>
      <li :key="user.id" v-for="user in users">Nombre: {{ user }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { getAllUsersQuery } from '../../services';

const getUsers = () => useQuery(getAllUsersQuery);

export default defineComponent({
  name: 'User',
  // This is an example of how to use suspense fallback
  // with async components on VueJS
  async setup() {
    const { result } = await getUsers();

    await new Promise((res) => {
      setTimeout(res, 3000);
    });

    return { users: result };
  },
});
</script>
