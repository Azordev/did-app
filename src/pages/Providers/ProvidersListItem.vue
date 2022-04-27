<template>
  <div @click="$emit('onClick', provider.id)" class="ProvidersList__item">
    <q-card class="my-card">
      <img :src="provider.logo_url" />
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProvidersListItem',
  emits: ['onClick'],
  props: {
    provider: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
});
</script>
