<template>
  <div>
    User Page. This is the list of users of app:
    <ul>
      {{
        users
      }}
      <li :key="user.id" v-for="user in users">Nombre: {{ user }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { getAllUsers } from '../../services';

const getUsers = () => useQuery(getAllUsers);

export default defineComponent({
  name: 'User',
  setup: async () => {
    const { result } = await getUsers();

    return { users: result };
  },
});
</script>
